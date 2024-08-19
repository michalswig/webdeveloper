import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvestmentResponse} from "../../core/models/investment.model";
import {CityResponse} from "../../core/models/city.model";
import {Subject, Subscription, takeUntil} from "rxjs";
import {InvestmentsService} from "../../core/services/investments.service";
import {CitiesService} from "../../core/services/cities.service";
import {DynamicComponentLoadingService} from "../../core/services/dynamic-component-loading.service";

@Component({
  selector: 'app-investment-list-dode',
  templateUrl: './investment-list-dode.component.html',
  styleUrls: ['./investment-list-dode.component.scss']
})
export class InvestmentListDodeComponent implements OnInit, OnDestroy {
  private allInvestments: InvestmentResponse[] = [];
  investments: InvestmentResponse[] = [];
  private unsubscribe$ = new Subject<void>();
  private subscriptionToCityChanges?: Subscription;
  private citiesLoaded = false;
  cities: CityResponse[] = [];
  private cityId: string = '';

  constructor(
    private dynamicLoadingService: DynamicComponentLoadingService,
    private investmentsService: InvestmentsService,
    private cityService: CitiesService,
  ) {
  }

  ngOnInit(): void {
    this.loadCities();
  }

  private loadCities() {
    if (this.citiesLoaded) {
      return;
    }
    this.cityService.getCities()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: data => {
          this.cities = data.cities;
          this.citiesLoaded = true;
          if (!this.subscriptionToCityChanges) {
            this.subscribeToCityChanges();
          }
        },
        error: error => {
          console.error('Error fetching cities:', error);
          this.citiesLoaded = false;
        }
      });
  }

  private subscribeToCityChanges() {
    this.dynamicLoadingService.getInvestmentComponentTrigger()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        if (this.citiesLoaded && data.cityId !== this.cityId) {
          this.cityId = data.cityId;
          this.getInvestments();
        }
      });
  }

  private getInvestments() {
    this.investmentsService.getInvestments()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: data => {
          this.allInvestments = data.investments;
          this.filterInvestmentsByCity(this.cityId);
        },
        error: error => console.error('Error fetching investments:', error)
      });
  }

  private filterInvestmentsByCity(cityId: string): void {
    const numericCityId = Number(cityId);
    this.investments = numericCityId ? this.allInvestments.filter(investment => {
      return investment.cityId === numericCityId;
    }) : [...this.allInvestments];
  }

  ngOnDestroy(): void {
    if (this.subscriptionToCityChanges) {
      this.subscriptionToCityChanges.unsubscribe();
    }
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
