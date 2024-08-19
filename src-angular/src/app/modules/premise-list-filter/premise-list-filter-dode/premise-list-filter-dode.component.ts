import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PremiseService } from "../../core/services/premise.service";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

export interface FilterCriteria {
  minPrice: number;
  maxPrice: number;
  minRoomCount: number;
  maxRoomCount: number;
  minArea: number;
  maxArea: number;
}

@Component({
  selector: 'app-premise-list-filter-dode',
  templateUrl: './premise-list-filter-dode.component.html',
  styleUrls: ['./premise-list-filter-dode.component.scss']
})
export class PremiseListFilterDodeComponent implements OnInit, OnDestroy {
  minPrice!: number;
  maxPrice!: number;
  minAllowedPrice!: number;
  maxAllowedPrice!: number;

  minRoomCount!: number;
  maxRoomCount!: number;
  minAllowedRoomCount!: number;
  maxAllowedRoomCount!: number;

  minArea!: number;
  maxArea!: number;
  minAllowedArea!: number;
  maxAllowedArea!: number;

  @Input() investmentId!: number;
  @Output() filterCriteriaChange = new EventEmitter<FilterCriteria>();

  private langChangeSubscription!: Subscription;

  constructor(
    private premiseService: PremiseService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef // Add ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadMinMaxTotalPriceAndRooms();
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // Trigger change detection manually
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  loadMinMaxTotalPriceAndRooms(): void {
    this.premiseService.getPremiseMinMaxTotalPriceByInvestmentId(this.investmentId)
      .subscribe((response) => {
        this.minPrice = response.minPrice;
        this.maxPrice = response.maxPrice;
        this.minAllowedPrice = this.minPrice;
        this.maxAllowedPrice = this.maxPrice;

        this.minRoomCount = response.minRoomCount;
        this.maxRoomCount = response.maxRoomCount;
        this.minAllowedRoomCount = this.minRoomCount;
        this.maxAllowedRoomCount = this.maxRoomCount;

        this.minArea = response.minArea;
        this.maxArea = response.maxArea;
        this.minAllowedArea = this.minArea;
        this.maxAllowedArea = this.maxArea;
      });
  }

  onMinPriceChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.minPrice = Number(input.value);
    this.emitFilterCriteriaChange();
  }

  onMaxPriceChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.maxPrice = Number(input.value);
    this.emitFilterCriteriaChange();
  }

  onMinRoomCountChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.minRoomCount = Number(input.value);
    this.emitFilterCriteriaChange();
  }

  onMaxRoomCountChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.maxRoomCount = Number(input.value);
    this.emitFilterCriteriaChange();
  }

  onMinAreaChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.minArea = Number(input.value);
    this.emitFilterCriteriaChange();
  }

  onMaxAreaChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.maxArea = Number(input.value);
    this.emitFilterCriteriaChange();
  }

  private emitFilterCriteriaChange(): void {
    this.filterCriteriaChange.emit({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      minRoomCount: this.minRoomCount,
      maxRoomCount: this.maxRoomCount,
      minArea: this.minArea,
      maxArea: this.maxArea
    });
  }

  formatPrice(value: number): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1).replace('.', ',') + ' mln';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1).replace('.', ',') + ' tys.';
    } else {
      return value + ' PLN';
    }
  }
}
