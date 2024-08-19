import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {InvestmentResponse} from "../../../core/models/investment.model";
import {Subject, takeUntil} from "rxjs";
import {LanguageService} from "../../../core/services/language.service";

@Component({
  selector: 'app-investment-dode',
  templateUrl: './investment-dode.component.html',
  styleUrls: ['./investment-dode.component.scss']
})
export class InvestmentDodeComponent implements OnInit, OnDestroy {
  @Input() investment!: InvestmentResponse;
  descriptionTranslation!: string;
  private unsubscribe$ = new Subject<void>();

  constructor(private languageService: LanguageService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.fetchInvestmentDescription();
    this.languageService.language$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.fetchInvestmentDescription();
      });
  }

  private fetchInvestmentDescription(): void {
    if (this.investment && this.investment.id) {
      this.languageService.getTranslation(this.investment.id, 'investment', 'description')
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: response => {
            this.descriptionTranslation = response.translation;
            this.changeDetectorRef.detectChanges();
          },
          error: error => {
            console.error('Error fetching description:', error);
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
