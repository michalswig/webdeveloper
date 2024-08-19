import { Component } from '@angular/core';
import {ScreenshotDialogComponent} from "./screenshot-dialog/screenshot-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent {

  projectName = 'Real Estate Management App';
  projectDescription = 'Unveiling the innovative project that redefines efficiency and user experience in real estate management. Dive into a comprehensive showcase of advanced technologies and methodologies used to create a robust, scalable, and user-friendly application designed to streamline real estate operations and enhance customer engagement.';

  screenshots = [
    {
      title: 'Admin Panel',
      description: 'This is the admin panel of the application.',
      images: [{ url: 'assets/img/overview/admin_panel.jpg', alt: 'Admin Panel' }]
    },
    {
      title: 'Filtering Premises',
      description: 'This screen shows how premises can be filtered.',
      images: [{ url: 'assets/img/overview/filtering_premises.jpg', alt: 'Filtering Premises' }]
    },
    {
      title: 'Home Page',
      description: 'This is the home page of the application.',
      images: [{ url: 'assets/img/overview/home_page.jpg', alt: 'Home Page' }]
    },
    {
      title: 'Premise Detail',
      description: 'Detailed view of a single premise.',
      images: [{ url: 'assets/img/overview/premise_detail.jpg', alt: 'Premise Detail' }]
    }
  ];

  technologies = [
    {
      name: 'Angular',
      logo: 'assets/img/overview/tech_logo/angular.jpg',
      description: 'A platform for building mobile and desktop web applications.'
    },
    {
      name: 'TypeScript',
      logo: 'assets/img/overview/tech_logo/Typescript_logo.png',
      description: 'A typed superset of JavaScript that compiles to plain JavaScript.'
    },
    {
      name: 'HTML/SCSS',
      logo: 'assets/img/overview/tech_logo/html_scss.jpg',
      description: 'Combining HTML and SCSS for powerful, elegant web design and development.'
    },
    {
      name: 'MySQL',
      logo: 'assets/img/overview/tech_logo/mySQL-logo.png',
      description: 'An open-source relational database management system.'
    },
    {
      name: 'Java',
      logo: 'assets/img/overview/tech_logo/java_logo.jpg',
      description: 'A high-level, class-based, object-oriented programming language.'
    },
    {
      name: 'SpringBoot',
      logo: 'assets/img/overview/tech_logo/spring_boot.png',
      description: 'A framework that simplifies the development of new Spring applications.'
    },
    {
      name: 'Hibernate',
      logo: 'assets/img/overview/tech_logo/Hibernaternate.jpg',
      description: 'An object-relational mapping tool for the Java programming language.'
    },
    {
      name: 'GitHub',
      logo: 'assets/img/overview/tech_logo/github.png',
      description: 'A web-based interface for version control and collaboration using Git.'
    }
  ];

  functionalitySteps = [
    {
      title: 'Backend: Login to Dashboard',
      description: 'You can log in with either a developer or admin authority, providing different dashboard views. Developers receive a personalized dashboard for their activities, while admins can manage all developers through a comprehensive dashboard view.',
      images: [
        { url: 'assets/img/overview/developer_panel.jpg', alt: 'Developer Panel' },
        { url: 'assets/img/overview/admin_panel.jpg', alt: 'Admin Panel' }
      ]
    },
    {
      title: 'Backend: Adding Developer',
      description: 'When logged in as an admin, you can easily add a new developer to the system if necessary. It is fast, easy, and convenient. The system is prepared to hold many developers with different implementations of front needs.',
      images: [
        { url: 'assets/img/overview/add_developer_01_dashboard_admin_view.jpg', alt: 'Add Developer - Dashboard View 1' },
        { url: 'assets/img/overview/add_developer_02_dashboard_admin_view.jpg', alt: 'Add Developer - Dashboard View 2' }
      ]
    },
    {
      title: 'Frontend: Filter and Paginate Premises',
      description: 'Use the filtering options to narrow down the list of available premises. This includes filtering by price value. The implementation uses Angular Material for efficient filtering and includes pagination and sorting options to enhance the user experience.',
      images: [
        { url: 'assets/img/overview/filtering_premises_functionality.jpg', alt: 'Filter Premises' },
        { url: 'assets/img/overview/paginating_premises_functionality.jpg', alt: 'Paginate Premises' }
      ]
    },
    {
      title: 'Frontend: Dynamic Homepage Setup',
      description: 'You can change the system code from the backend to set up different developers dynamically. This allows us to modify views on the front end easily, quickly, and efficiently. The entire platform is built to adapt easily to the next developer, making it a key point to generate fast revenue.',
      images: [
        { url: 'assets/img/overview/homepage_antal.jpg', alt: 'Homepage Antal' },
        { url: 'assets/img/overview/homepage_domde.jpg', alt: 'Homepage Dom Development' }
      ]
    }
  ];



  highlights = [
    {
      title: 'Login',
      description: 'The backend login endpoint is responsible for authenticating users, issuing JWT tokens, and decrypting the received encrypted passwords.',
      code: `
        @PostMapping("login")
        public ResponseEntity<?> login(@RequestBody UserData user) {
            try {
                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(user.getLogin(), decrypt(user.getEncryptedPassword()))
                );
                SecurityContextHolder.getContext().setAuthentication(authentication);

                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
                String roles = userDetails.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.joining(","));

                long now = System.currentTimeMillis();
                String jwt = Jwts.builder()
                        .setSubject(user.getLogin())
                        .claim("roles", roles)
                        .setIssuedAt(new Date(now))
                        .setExpiration(new Date(now + jwtConfig.getJwtExpirationInMillis()))
                        .signWith(SignatureAlgorithm.HS256, jwtConfig.getJwtSecret())
                        .compact();

                Map<String, Object> response = new HashMap<>();
                response.put("token", jwt);
                return ResponseEntity.ok().body(response);

            } catch (AuthenticationException e) {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "Unauthorized");
                errorResponse.put("message", "Invalid username or password");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(errorResponse);
            } catch (EncryptionException e) {
                log.error("Error during decryption", e);
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }
      `
    },
    {
      title: 'Translation and Dictionary Management',
      description: 'Implemented a flexible and scalable solution for managing translations and dictionaries using a single SQL table, enhancing localization capabilities.',
      code: `
        @GetMapping("/{entityId}/{domain}/{key}")
        public ResponseEntity<TranslationGetResponse> getTranslation(
                @PathVariable Integer entityId,
                @PathVariable String domain,
                @PathVariable String key,
                @RequestParam(name = "languageCode", required = false) String languageCode) {
            if (languageCode == null || languageCode.isEmpty()) {
                languageCode = LocaleContextHolder.getLocale().getLanguage();
            }
            return ResponseEntity.ok(translationDataService.getTranslation(new TranslationData(
                    entityId,
                    languageCode,
                    domain,
                    key
            )));
        }

        @GetMapping("/dictionary/{domain}/{key}")
        public ResponseEntity<DictionaryGetResponse> getDictionary(
                @PathVariable String domain,
                @PathVariable String key,
                @RequestParam(name = "languageCode", required = false) String languageCode) {
            if (languageCode == null || languageCode.isEmpty()) {
                languageCode = LocaleContextHolder.getLocale().getLanguage();
            }
            return ResponseEntity.ok(translationDataService.getDictionary(new DictionaryData(
                    languageCode,
                    domain,
                    key
            )));
        }
      `
    },
    {
      title: 'Configuration Properties',
      description: 'Implemented a mechanism to load configuration properties from the backend, addressing the need for dynamic and environment-specific configurations.',
      code: `
        @GetMapping("config/properties")
        public ResponseEntity<Map<String, String>> getConfiguration() {
            Properties prop = new Properties();
            try (InputStream input = getClass().getClassLoader()
                    .getResourceAsStream(profileConfigLoader.getActiveProfilePropertiesFileName())) {
                if (input == null) {
                    logger.error("Properties file not found: {}", profileConfigLoader
                            .getActiveProfilePropertiesFileName());
                    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
                }
                prop.load(input);
            } catch (IOException ex) {
                logger.error("Error loading properties file", ex);
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
            return ResponseEntity.ok(propertyConfigService.getFilteredConfigProperties(prop));
        }
      `
    },
    {
      title: 'JPQL for Filtering Purposes',
      description: 'Utilized JPQL to efficiently find the minimum and maximum price for premises within an investment, enabling effective filtering and data management.',
      code: `
        @Repository
        public interface PremiseRepository extends JpaRepository<Premise, Long> {

            @Query("SELECT p FROM Premise p WHERE p.building.investmentBuildings.id = :id")
            List<Premise> findAllByInvestmentId(@Param("id") Long id);

            @Query("SELECT MIN(p.totalPrice) AS minPrice, MAX(p.totalPrice) AS maxPrice " +
                    "FROM Premise p JOIN p.building b " +
                    "WHERE b.investmentId = :investmentId")
            AggregatedValues findPremisePriceRangeByInvestmentId(@Param("investmentId") Long investmentId);
        }
      `
    },
    {
      title: 'Angular Dynamic Component Loading',
      description: 'Implemented dynamic loading of components to create a flexible and easily extendable application architecture.',
      code: `

        enum ComponentLocation {
          Header,
          Footer,
          Contact,
          Home,
          InvestmentList,
          PremiseList,
          PremiseDetail,
          Dashboard
        }

        interface ComponentConfig {
          [key: string]: {
            [location in ComponentLocation]: Type<any>;
          };
        }

        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        })
        export class AppComponent implements OnInit, OnDestroy {

          @ViewChild('headerContainer', {read: ViewContainerRef, static: true}) private headerContainer!: ViewContainerRef;
          @ViewChild('footerContainer', {read: ViewContainerRef, static: true}) private footerContainer!: ViewContainerRef;
          @ViewChild('contactContainer', {read: ViewContainerRef, static: true}) private contactContainer!: ViewContainerRef;
          @ViewChild('homeContainer', {read: ViewContainerRef, static: true}) private homeContainer!: ViewContainerRef;
          @ViewChild('investmentListContainer', {read: ViewContainerRef}) private investmentListContainer!: ViewContainerRef;
          @ViewChild('premiseListContainer', {read: ViewContainerRef}) private premiseListContainer!: ViewContainerRef;
          @ViewChild('premiseDetailContainer', {read: ViewContainerRef}) private premiseDetailContainer!: ViewContainerRef;
          @ViewChild('dashboardContainer', {read: ViewContainerRef}) private dashboardContainer!: ViewContainerRef;

          private subscriptions: Subscription = new Subscription();
          private statusCode: SearchResultCode | null = null;
          private statusCodeSource = new ReplaySubject<SearchResultCode>(1);

          private componentConfig: ComponentConfig = {
            antal: {
              [ComponentLocation.Header]: AntalHeaderComponent,
              [ComponentLocation.Footer]: FooterAntalComponent,
              [ComponentLocation.Contact]: ContactAntalComponent,
              [ComponentLocation.Home]: HomeAntalComponent,
              [ComponentLocation.InvestmentList]: InvestmentListAntalComponent,
              [ComponentLocation.PremiseList]: PremiseListAntalComponent,
              [ComponentLocation.PremiseDetail]: PremiseDetailAntalComponent,
              [ComponentLocation.Dashboard]: DashboardDeveloperComponent,
            },
            domdevelopment: {
              [ComponentLocation.Header]: DodeHeaderComponent,
              [ComponentLocation.Footer]: FooterDodeComponent,
              [ComponentLocation.Contact]: ContactDodeComponent,
              [ComponentLocation.Home]: HomeDodeComponent,
              [ComponentLocation.InvestmentList]: InvestmentListDodeComponent,
              [ComponentLocation.PremiseList]: PremiseListDodeComponent,
              [ComponentLocation.PremiseDetail]: PremiseDetailDodeComponent,
              [ComponentLocation.Dashboard]: DashboardDeveloperComponent,
            },
            default: {
              [ComponentLocation.Header]: DefaultComponent,
              [ComponentLocation.Footer]: DefaultComponent,
              [ComponentLocation.Contact]: DefaultComponent,
              [ComponentLocation.Home]: DefaultComponent,
              [ComponentLocation.InvestmentList]: DefaultComponent,
              [ComponentLocation.PremiseList]: DefaultComponent,
              [ComponentLocation.PremiseDetail]: DefaultComponent,
              [ComponentLocation.Dashboard]: DefaultComponent,
            }
          };

          constructor(
            private configService: ConfigService,
            private router: Router,
            private authService: AuthenticationService) {
          }

          ngOnInit() {
            this.initializeAppAfterFetchingCode();
            this.observeRouterEvents();
          }

          ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }

          private initializeAppAfterFetchingCode() {
            this.fetchCode().pipe(
              take(1)
            ).subscribe({
              next: (statusCode) => {
                this.statusCode = statusCode;
                this.loadDynamicComponents();
              },
              error: (error) => {
                console.error('Error fetching status code:', error);
              },
            });
          }

          private fetchCode(): Observable<SearchResultCode> {
            const statusCode: SearchResultCode = {
              code: this.configService.getSystemCode
            };
            return of(statusCode).pipe(
              tap({
                next: (code) => this.statusCodeSource.next(code),
                error: (error) => console.error('Error fetching status code:', error)
              })
            );
          }

          private observeRouterEvents() {
            this.subscriptions.add(
              this.router.events.pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd)
              ).subscribe(event => {
                this.handleNavigationChange(event);
              })
            );
          }

          private handleNavigationChange(event: NavigationEnd) {
            const url = event.urlAfterRedirects.split('?')[0];
            this.clearAllContainers();
            const directMatchAction = this.routesClearingMap.get(url);
            if (directMatchAction) {
              directMatchAction();
            } else if (/^\/city\/.+/.test(url)) {
              this.loadDynamicInvestmentComponent(url);
            } else if (/^\/premises\/.+/.test(url)) {
              this.loadDynamicPremiseComponent(url);
            } else if (/^\/premise\/.+/.test(url)) {
              this.loadDynamicPremiseDetailComponent(url);
            } else if (url === '/') {
              this.createComponent(this.homeContainer, ComponentLocation.Home);
            } else if (url.startsWith("/dashboard")) {
              this.loadDynamicDashboardComponent();
            }
          }

          private loadDynamicComponents() {
            if (this.statusCode) {
              this.createComponent(this.headerContainer, ComponentLocation.Header);
              this.createComponent(this.footerContainer, ComponentLocation.Footer);
              if (this.router.url === '/') {
                this.createComponent(this.homeContainer, ComponentLocation.Home);
              }
            }
          }

          private clearAllContainers() {
            this.homeContainer.clear();
            this.contactContainer.clear();
            this.investmentListContainer.clear();
            this.premiseListContainer.clear();
            this.premiseDetailContainer.clear();
            this.dashboardContainer.clear();
          }

          private routesClearingMap = new Map<string, () => void>([
            ['/contact', () => {
              this.homeContainer.clear();
              this.investmentListContainer.clear();
              this.contactContainer.clear();
              this.createComponent(this.contactContainer, ComponentLocation.Contact);
            }],
            ['/', () => {
              this.homeContainer.clear();
              this.createComponent(this.homeContainer, ComponentLocation.Home);
            }],
            ['/login', () => {
              this.homeContainer.clear();
              this.investmentListContainer.clear();
              this.contactContainer.clear();
            }],
            ['/dashboard', () => {
              this.clearAllContainers();
              this.loadDynamicDashboardComponent();
            }],
          ]);

          private loadDynamicInvestmentComponent(url: string) {
            const urlSegments = url.split('/');
            const cityId = urlSegments[2];
            const statusKey = this.statusCode?.code || 'default';
            const componentMapping = this.componentConfig[statusKey];
            const componentClass = componentMapping[ComponentLocation.InvestmentList];
            if (componentClass) {
              this.loadComponent(
                this.investmentListContainer,
                componentClass,
                {id: cityId}
              );
            } else {
              console.error(\`No component found for \${ComponentLocation.InvestmentList} with status key \${statusKey}\`);
            }
          }

          private loadDynamicPremiseComponent(url: string) {
            const urlSegments = url.split('/');
            const investmentId = urlSegments[2];
            const statusKey = this.statusCode?.code || 'default';
            const componentMapping = this.componentConfig[statusKey];
            const componentClass = componentMapping[ComponentLocation.PremiseList];
            if (componentClass) {
              this.loadComponent(
                this.premiseListContainer,
                componentClass,
                {investmentId: investmentId}
              );
            } else {
              console.error(\`No component found for Premises with status key \${statusKey}\`);
            }
          }

          private loadDynamicPremiseDetailComponent(url: string) {
            const urlSegments = url.split('/');
            const premiseId = urlSegments[2];
            const statusKey = this.statusCode?.code || 'default';
            const componentMapping = this.componentConfig[statusKey];
            const componentClass = componentMapping[ComponentLocation.PremiseDetail];
            if (componentClass) {
              this.loadComponent(
                this.premiseDetailContainer,
                componentClass,
                {premiseId: premiseId}
              );
            } else {
              console.error(\`No component found for Premise Detail with status key \${statusKey}\`);
            }
          }

          private loadDynamicDashboardComponent() {
            if (this.authService.hasRole('DEVELOPER')) {
              this.loadComponent(this.dashboardContainer, DashboardDeveloperComponent);
            } else if (this.authService.hasRole('ADMIN')) {
              this.loadComponent(this.dashboardContainer, DashboardAdminComponent);
            } else {
              const statusKey = this.statusCode?.code || 'default';
              const componentMapping = this.componentConfig[statusKey];
              const componentClass = componentMapping[ComponentLocation.Dashboard];
              if (componentClass) {
                this.loadComponent(this.dashboardContainer, componentClass);
              } else {
                console.error(\`No dashboard component found for status key \${statusKey}\`);
              }
            }
          }

          private createComponent(container: ViewContainerRef, location: ComponentLocation) {
            if (!this.statusCode) {
              console.warn('Status code is not available, cannot create component');
              return;
            }
            const statusKey = this.statusCode.code;
            const componentConfigEntry = this.componentConfig[statusKey];
            if (!componentConfigEntry) {
              return;
            }
            const componentClass = componentConfigEntry[location];
            if (!componentClass) {
              return;
            }
            this.loadComponent(container, componentClass);
          }

          private loadComponent<T>(container: ViewContainerRef, component: Type<T>, inputData?: any): void {
            container.clear();
            const componentRef = container.createComponent(component);
            if (inputData && componentRef.instance) {
              Object.assign(componentRef.instance, inputData);
            }
          }
        }
      `
    },
    {
      title: 'Angular Module Configuration',
      description: 'Configured the Angular App Module to manage the application initialization, internationalization, and custom route reuse strategy, ensuring a well-structured and maintainable project setup.',
      code: `
      import { APP_INITIALIZER, NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';
      import { CoreModule } from './modules/core/core.module';
      import { HomeModule } from './modules/home/home.module';
      import { AuthModule } from './modules/auth/auth.module';
      import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
      import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
      import { TranslateHttpLoader } from '@ngx-translate/http-loader';
      import { ContactModule } from './modules/contact/contact.module';
      import { PremiseListModule } from './modules/premise-list/premise-list.module';
      import { CustomReuseStrategyService } from './modules/core/routing/custom-reuse-strategy.service';
      import { RouteReuseStrategy } from '@angular/router';
      import { ConfigService } from './modules/core/services/config.service';
      import { PremiseListFilterModule } from './modules/premise-list-filter/premise-list-filter.module';
      import { InvestmentListModule } from './modules/investment-list/investment-list.module';
      import { PremiseDetailModule } from './modules/premise-detail/premise-detail.module';
      import { AcceptLanguageInterceptor } from './modules/core/services/accept-language.interceptor';
      import { LanguageService } from './modules/core/services/language.service';
      import { MatPaginatorIntl } from '@angular/material/paginator';
      import { DashboardModule } from './modules/dashboard/dashboard.module';
      import { DeveloperModule } from './modules/developer/developer.module';

      export function initializeConfig(config: ConfigService) {
        return (): Promise<any> => {
          return config.loadAppConfig();
        };
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
              return \`0 \${this.translate.instant('shared.paginator.range_of')} \${length}\`;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return \`\${startIndex + 1} – \${endIndex} \${this.translate.instant('shared.paginator.range.of')} \${length}\`;
          };
          this.changes.next();
        }
      }

      @NgModule({
        declarations: [
          AppComponent
        ],
        imports: [
          BrowserModule,
          HomeModule,
          ContactModule,
          AuthModule,
          CoreModule,
          InvestmentListModule,
          PremiseListModule,
          PremiseListFilterModule,
          PremiseDetailModule,
          DashboardModule,
          DeveloperModule,
          AppRoutingModule,
          HttpClientModule,
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          })
        ],
        providers: [
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
          }
        ],
        bootstrap: [AppComponent]
      })
      export class AppModule {
      }
      `
    },

  ];

  constructor(public dialog: MatDialog) {
  }

  openDialog(screenshot: { title: string, images: { url: string; alt: string; }[] }) {
    this.dialog.open(ScreenshotDialogComponent, {
      data: {
        title: screenshot.title,
        images: screenshot.images
      },
      hasBackdrop: true,
      backdropClass: 'backdrop-class',
      width: '80%',
      height: '80%'
    });
  }

}
