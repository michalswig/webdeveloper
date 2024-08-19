import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject, tap} from "rxjs";
import {HeaderLogoUrlData} from "../models/header-logo-url.model";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class HeaderLogoUrlService {
  private logoUrl = new ReplaySubject<HeaderLogoUrlData>(1);

  constructor(private configService: ConfigService) {
  }

  getLogoUrl(): Observable<HeaderLogoUrlData> {
    const logoUrl: HeaderLogoUrlData = {
      url: this.configService.getLogoDeveloperUrl
    };
    return of(logoUrl).pipe(
      tap({
        next: (url) => this.logoUrl.next(url),
        error: (error) => console.error('Error fetching logo url:', error)
      })
    );
  }

}
