import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./modules/core/core.module";
import {HomeModule} from "./modules/home/home.module";
import {AuthModule} from "./modules/auth/auth.module";
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ContactModule} from "./modules/contact/contact.module";
import {PremiseListModule} from "./modules/premise-list/premise-list.module";
import {CustomReuseStrategyService} from "./modules/core/routing/custom-reuse-strategy.service";
import {RouteReuseStrategy} from "@angular/router";
import {ConfigService} from "./modules/core/services/config.service";
import {PremiseListFilterModule} from "./modules/premise-list-filter/premise-list-filter.module";
import {InvestmentListModule} from "./modules/investment-list/investment-list.module";
import {PremiseDetailModule} from "./modules/premise-detail/premise-detail.module";
import {AcceptLanguageInterceptor} from "./modules/core/services/accept-language.interceptor";
import {LanguageService} from "./modules/core/services/language.service";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {ProjectOverviewModule} from "./modules/project-overview/project-overview.module";

export function initializeConfig(config: ConfigService) {
  return (): Promise<any> => {
    return config.loadAppConfig();
  }
}

export function serveLanguageServices(languageService: LanguageService, translate: TranslateService) {
  return (): Promise<any> => {
    return new Promise((resolve) => {
      const browserLang = translate.getBrowserLang();
      const langToUse = localStorage.getItem('preferredLanguage') ?? browserLang ?? 'en';
      translate.setDefaultLang(langToUse);
      languageService.setLanguage(langToUse);
      translate.use(langToUse).subscribe(() => {
        resolve(null);
      });
    });
  };
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  constructor(private translate: TranslateService) {
    super();
    this.translate.onLangChange.subscribe(() => this.translateLabels());
    this.translateLabels();
  }
  translateLabels() {
    this.itemsPerPageLabel = this.translate.instant('shared.paginator.items.per.page');
    this.nextPageLabel = this.translate.instant('shared.paginator.next.page');
    this.previousPageLabel = this.translate.instant('shared.paginator.previous.page');
    this.firstPageLabel = this.translate.instant('shared.paginator.first.page');
    this.lastPageLabel = this.translate.instant('shared.paginator.last.page');
    this.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return `0 ${this.translate.instant('shared.paginator.range_of')} ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} – ${endIndex} ${this.translate.instant('shared.paginator.range.of')} ${length}`;
    };
    this.changes.next();
  }
}

@NgModule({ declarations: [
        AppComponent,
  ],
    exports: [],
    bootstrap: [AppComponent], imports: [BrowserModule,
        HomeModule,
        ContactModule,
        AuthModule,
        CoreModule,
        InvestmentListModule,
        PremiseListModule,
        PremiseListFilterModule,
        PremiseDetailModule,
        DashboardModule,
        ProjectOverviewModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })], providers: [
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializeConfig,
            deps: [ConfigService],
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: serveLanguageServices,
            deps: [LanguageService, TranslateService],
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AcceptLanguageInterceptor,
            multi: true
        },
        {
            provide: RouteReuseStrategy,
            useClass: CustomReuseStrategyService
        },
        {
            provide: MatPaginatorIntl,
            deps: [TranslateService],
            useFactory: (translate: TranslateService) => {
                return new CustomMatPaginatorIntl(translate);
            }
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {
}
