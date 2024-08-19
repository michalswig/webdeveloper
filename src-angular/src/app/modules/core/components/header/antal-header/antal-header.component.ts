import {Component, OnInit} from '@angular/core';
import {CityResponse} from "../../../models/city.model";
import {HeaderLogoUrlService} from "../../../services/header-logo-url.service";
import {CitiesService} from "../../../services/cities.service";
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../../services/authentication.service";
import {LanguageService} from "../../../services/language.service";

@Component({
  selector: 'app-antal-header',
  templateUrl: './antal-header.component.html',
  styleUrls: ['./antal-header.component.scss']
})
export class AntalHeaderComponent implements OnInit {
  url!: string;
  cities: CityResponse[] = [];
  isLoggedIn$: Observable<boolean>;

  constructor(
    private headerLogoUrlService: HeaderLogoUrlService,
    private cityService: CitiesService,
    private translate: TranslateService,
    private authService: AuthenticationService, // Add AuthenticationService
    private languageService: LanguageService
  ) {
    translate.setDefaultLang('en');
    this.isLoggedIn$ = this.authService.isLoggedIn(); // Assign the observable
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
