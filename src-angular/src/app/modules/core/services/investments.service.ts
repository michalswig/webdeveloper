import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {catchError, Observable, shareReplay, tap, throwError} from "rxjs";
import {SearchResultInvestmentModel} from "../models/searchResultInvestment.model";
import {ConstantsService} from "./constants.service";

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {

  private apiUrl = this.constanceService.API_INVESTMENTS_ENDPOINT;
  private investmentCache$: Observable<SearchResultInvestmentModel> | null = null;
  private cacheExpirationMs = 100000; // Cache expiration in milliseconds (300000ms = 5 minutes)
  private lastRequestTime: number | null = null;

  constructor(private http: HttpClient, private constanceService: ConstantsService) { }

  getInvestments(): Observable<SearchResultInvestmentModel> {
    const currentTime = new Date().getTime();

    if (this.investmentCache$ && this.lastRequestTime && (currentTime - this.lastRequestTime < this.cacheExpirationMs)) {
      return this.investmentCache$;
    } else {
      this.investmentCache$ = this.http.get<SearchResultInvestmentModel>(this.apiUrl).pipe(
        tap(() => this.lastRequestTime = new Date().getTime()),
        shareReplay(1),
        catchError(error => {
          return throwError(() => error);
        })
      );
      return this.investmentCache$;
    }
  }

  getInvestmentByPremiseId(premiseId: string): Observable<SearchResultInvestmentModel> {
    const url = this.constanceService.getApiInvestmentByPremiseIdEndpoint(premiseId);
    return this.http.get<SearchResultInvestmentModel>(url);
  }

}


