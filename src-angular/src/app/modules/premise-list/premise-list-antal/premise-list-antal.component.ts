import {Component, OnDestroy, OnInit} from '@angular/core';
import {PremiseResponse} from "../../core/models/premise.model";
import {Subject, Subscription, takeUntil} from "rxjs";
import {PremiseService} from "../../core/services/premise.service";
import {DynamicComponentLoadingService} from "../../core/services/dynamic-component-loading.service";

@Component({
  selector: 'app-premise-list-antal',
  templateUrl: './premise-list-antal.component.html',
  styleUrls: ['./premise-list-antal.component.scss']
})
export class PremiseListAntalComponent implements OnInit, OnDestroy {
  premises: PremiseResponse[] = [];
  private unsubscribe$ = new Subject<void>();
  private subscription!: Subscription;
  private investmentId!: number;

  constructor(
    private premiseService: PremiseService,
    private dynamicLoadingService: DynamicComponentLoadingService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.dynamicLoadingService.getPremiseComponentTrigger()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (data) => {
          this.investmentId = data.investmentId;
          this.loadPremises(this.investmentId);
        },
        error: (error) => console.error('Error in dynamic loading of premises:', error)
      });
  }

  private loadPremises(investmentId: number) {
    this.premiseService.getPremisesByInvestmentIdAndSetTranslation(investmentId).subscribe({
      next: (response) => {
        this.premises = response.premisesGetResponse;
      },
      error: (error) => console.error('Error fetching premises:', error)
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
