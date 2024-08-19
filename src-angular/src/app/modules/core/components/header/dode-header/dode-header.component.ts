import { Component, OnInit } from '@angular/core';
import { CityResponse } from "../../../models/city.model";
import { HeaderLogoUrlService } from "../../../services/header-logo-url.service";
import { CitiesService } from "../../../services/cities.service";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "../../../services/language.service";
import { AuthenticationService } from "../../../services/authentication.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-dode-header',
  templateUrl: './dode-header.component.html',
  styleUrls: ['./dode-header.component.scss']
})
export class DodeHeaderComponent implements OnInit {
  url!: string;
  cities: CityResponse[] = [];
  isLoggedIn$: Observable<boolean>;

  constructor(
    private headerLogoUrlService: HeaderLogoUrlService,
    private cityService: CitiesService,
    private translate: TranslateService,
    private authService: AuthenticationService,
    private languageService: LanguageService
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.languageService.setLanguage(language);
  }

  private getLogoUrl(): void {
    this.headerLogoUrlService.getLogoUrl().subscribe(data => {
      this.url = data.url;
    });
  }

  private getCities() {
    this.cityService.getCities().subscribe(data => {
      this.cities = data.cities;
    });
  }

  ngOnInit(): void {
    this.getLogoUrl();
    this.getCities();
  }

  logout(): void {
    this.authService.logout();
  }
}
