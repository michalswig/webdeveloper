import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {BehaviorSubject, catchError, from, map, Observable, switchMap, throwError} from 'rxjs';
import {TokenService} from './token.service';
import {Router} from '@angular/router';
import {ConstantsService} from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router,
    private constantsService: ConstantsService
  ) {
  }

  login(username: string, password: string): Observable<string> {
    return from(this.tokenService.encrypt(password)).pipe(
      switchMap(encryptedPassword =>
        this.http.post<{ token: string, roles: string[] }>(this.constantsService.getApiLoginEndpoint(),
          {
            login: username, encryptedPassword: encryptedPassword
          },
          {
            headers: { 'Content-Type': 'application/json' }
          }).pipe(
          map(response => {
            const { token } = response;
            if (token) {
              this.tokenService.saveToken(token);
              this.loggedIn.next(true);
              return token;
            } else {
              throw new Error('Authentication failed: No token received');
            }
          }),
          catchError((error: HttpErrorResponse) => {
            console.error('AuthService error:', error);
            const errorMessage = error.error.message || 'An error occurred during login';
            return throwError(() => new Error(errorMessage));
          })
        )
      )
    );
  }

  logout(): void {
    this.tokenService.clearToken();
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  isLoggedInSync(): boolean {
    return !!this.tokenService.getToken() && !this.tokenService.isTokenExpired(this.tokenService.getToken()!);
  }

  hasRole(role: string): boolean {
    const token = this.tokenService.getToken();
    if (token) {
      const roles = this.tokenService.getRolesFromToken(token);
      return roles.includes(role);
    }
    return false;
  }

  getLoggedInUsername(): string | null {
    const token = this.tokenService.getToken();
    if (token) {
      return this.tokenService.getUsernameFromToken(token);
    }
    return null;
  }

  private hasToken(): boolean {
    return !!this.tokenService.getToken();
  }



}
