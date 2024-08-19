import {Component, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, Observable, of, ReplaySubject, Subscription, take, tap} from 'rxjs';
import {SearchResultCode} from "./modules/core/models/searchResultCode.model";
import {
  InvestmentListAntalComponent
} from "./modules/investment-list/investment-list-antal/investment-list-antal.component";
import {
  InvestmentListDodeComponent
} from "./modules/investment-list/investment-list-dode/investment-list-dode.component";
import {AntalHeaderComponent} from "./modules/core/components/header/antal-header/antal-header.component";
import {FooterAntalComponent} from "./modules/core/components/footer/footer-antal/footer-antal.component";
import {ContactAntalComponent} from "./modules/contact/contact-antal/contact-antal.component";
import {HomeAntalComponent} from "./modules/home/home-antal/home-antal.component";
import {DodeHeaderComponent} from "./modules/core/components/header/dode-header/dode-header.component";
import {FooterDodeComponent} from "./modules/core/components/footer/footer-dode/footer-dode.component";
import {ContactDodeComponent} from "./modules/contact/contact-dode/contact-dode.component";
import {HomeDodeComponent} from "./modules/home/home-dode/home-dode.component";
import {DefaultComponent} from "./modules/shared/default/default.component";
import {ConfigService} from "./modules/core/services/config.service";
import {PremiseListAntalComponent} from "./modules/premise-list/premise-list-antal/premise-list-antal.component";
import {PremiseListDodeComponent} from "./modules/premise-list/premise-list-dode/premise-list-dode.component";
import {
  PremiseDetailAntalComponent
} from './modules/premise-detail/premise-detail-antal/premise-detail-antal.component';
import {PremiseDetailDodeComponent} from "./modules/premise-detail/premise-detail-dode/premise-detail-dode.component";
import {AuthenticationService} from "./modules/core/services/authentication.service";
import {DashboardDeveloperComponent} from "./modules/dashboard/dashboard-developer/dashboard-developer.component";
import {DashboardAdminComponent} from "./modules/dashboard/dashboard-admin/dashboard-admin.component";
import {ProjectOverviewComponent} from "./modules/project-overview/project-overview.component";


enum ComponentLocation {
  Header,
  Footer,
  Contact,
  Home,
  InvestmentList,
  PremiseList,
  PremiseDetail,
  Dashboard,
  ProjectOverview
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
  @ViewChild('projectOverviewContainer', {read: ViewContainerRef}) private projectOverviewContainer!: ViewContainerRef;

  title  = 'developer project';

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
      [ComponentLocation.ProjectOverview]: ProjectOverviewComponent,
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
      [ComponentLocation.ProjectOverview]: ProjectOverviewComponent,
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
      [ComponentLocation.ProjectOverview]: DefaultComponent,
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
//observeRouterEvents
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
    // this.projectOverviewContainer.clear();
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
    ['/project-overview', () => {
      this.clearAllContainers();
      this.createComponent(this.projectOverviewContainer, ComponentLocation.ProjectOverview);
    }],
    // Add more route actions as needed
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
      console.error(`No component found for ${ComponentLocation.InvestmentList} with status key ${statusKey}`);
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
      console.error(`No component found for Premises with status key ${statusKey}`);
    }
  }

  private loadDynamicPremiseDetailComponent(url: string) {
    const urlSegments = url.split('/');
    const premiseId = urlSegments[2]; // Adjust the index as necessary
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
      console.error(`No component found for Premise Detail with status key ${statusKey}`);
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
        console.error(`No dashboard component found for status key ${statusKey}`);
      }
    }
  }

  private loadDynamicProjectOverviewComponent() {
    const statusKey = this.statusCode?.code || 'default';
    const componentMapping = this.componentConfig[statusKey];
    const componentClass = componentMapping[ComponentLocation.ProjectOverview];
    if (componentClass) {
      this.loadComponent(this.projectOverviewContainer, componentClass);
    } else {
      console.error(`No project Overview component found for status key ${statusKey}`);
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
