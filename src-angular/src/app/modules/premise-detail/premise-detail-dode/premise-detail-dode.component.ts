import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {PremiseService} from "../../core/services/premise.service";
import {DynamicComponentLoadingService} from "../../core/services/dynamic-component-loading.service";
import {Subject, Subscription, takeUntil} from "rxjs";
import {PremiseResponse} from "../../core/models/premise.model";
import {InvestmentResponse} from "../../core/models/investment.model";
import {InvestmentsService} from "../../core/services/investments.service";
import {LanguageService} from "../../core/services/language.service";
import {ConstantsService} from "../../core/services/constants.service";

@Component({
  selector: 'app-premise-detail-dode',
  templateUrl: './premise-detail-dode.component.html',
  styleUrls: ['./premise-detail-dode.component.scss']
})
export class PremiseDetailDodeComponent implements OnInit, OnDestroy {
  premises: PremiseResponse[] = [];
  investments: InvestmentResponse[] = [];
  private subscription!: Subscription;
  private unsubscribe$ = new Subject<void>();
  private dictionaryValues: { [key: string]: string } = {};

  constructor(
    private premiseService: PremiseService,
    private investmentService: InvestmentsService,
    private dynamicLoadingService: DynamicComponentLoadingService,
    private languageService: LanguageService,
    protected constantsService: ConstantsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  getDictionaryValue(attribute: 'technicalStatus' | 'salesStatus' | 'exposure',
                     premise: PremiseResponse): string {
    const key = `premises.${attribute}.${premise[attribute]}`;
    return this.dictionaryValues[key];
  }

  ngOnInit() {
    this.subscription = this.dynamicLoadingService.getPremiseDetailComponentTrigger()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (data) => {
          this.loadPremiseById(data.premiseId);
          this.loadInvestmentByPremiseId(data.premiseId);
        },
        error: (error) => console.error(this.constantsService.ERROR_MESSAGE, error)
      });
    this.languageService.language$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        if (this.premises && this.premises.length > 0) {
          this.premises.forEach(premise => this.determineAndFetchLabelsForPremise(premise));
        }
        if (this.investments && this.investments.length > 0) {
          this.investments.forEach((investment, index) => {
            this.fetchInvestmentDescription(index);
          });
        }
      });
  }

  loadPremiseById(premiseId: string) {
    this.premiseService.getPremiseById(premiseId).subscribe({
      next: (response) => {
        this.premises = response.premisesGetResponse || [];
        this.premises.forEach(premise => {
          this.determineAndFetchLabelsForPremise(premise);
        });
      },
      error: (error) => console.error(this.constantsService.ERROR_MESSAGE, error)
    });
  }

  loadInvestmentByPremiseId(premiseId: string) {
    this.investmentService.getInvestmentByPremiseId(premiseId).subscribe({
      next: (response) => {
        if (Array.isArray(response.investments) && response.investments.length > 0) {
          this.investments = response.investments;
          this.investments.forEach((_, index) => this.fetchInvestmentDescription(index));
        }
      },
      error: (error) => console.error(this.constantsService.ERROR_MESSAGE, error)
    });
  }

  determineAndFetchLabelsForPremise(premise: PremiseResponse): void {
    [
      this.constantsService.attributes.SALES_STATUS,
      this.constantsService.attributes.TECHNICAL_STATUS,
      this.constantsService.attributes.EXPOSURE
    ]
      .forEach(attribute => {
        const domain = `premises.${attribute}`;
        const key = premise[attribute as keyof PremiseResponse];
        if (typeof key === 'string') {
          this.fetchDictionaryLabels([key], domain);
        }
      });
  }

  fetchInvestmentDescription(index: number): void {
    const investmentId = this.investments[index].id;
    this.languageService.getTranslation(investmentId, this.constantsService.attributes.INVESTMENT, this.constantsService.attributes.DESCRIPTION)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: response => {
          this.investments[index].description = response.translation;
          this.changeDetectorRef.detectChanges();
        },
        error: error => {
          console.error(this.constantsService.ERROR_MESSAGE, error);
        }
      });
  }

  private fetchDictionaryLabels(keys: string[], domain: string): void {
    keys.forEach(key => {
      this.languageService.getDictionary(domain, key)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: (response) => {
            const fullKey = `${domain}.${key}`;
            this.dictionaryValues[fullKey] = response.translation;
          },
          error: (error) => console.error(this.constantsService.ERROR_MESSAGE, error)
        });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.subscription.unsubscribe();
  }

}
