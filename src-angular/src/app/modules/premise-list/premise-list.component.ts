import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DynamicComponentLoadingService } from "../core/services/dynamic-component-loading.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-premise-list',
  template: '', // No HTML content, it's a dynamic loader only
  styleUrls: ['./premise-list.component.scss']
})
export class PremiseListComponent implements OnInit, OnDestroy {
  investmentId = '';
  private routeSub!: Subscription;

  constructor(
    private dynamicLoadingService: DynamicComponentLoadingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const investmentId: string | null = params.get('id');
      this.handleInvestmentIdChange(investmentId);
    });
  }

  private handleInvestmentIdChange(newInvestmentId: string | null) {
    if (newInvestmentId && newInvestmentId !== this.investmentId) {
      this.investmentId = newInvestmentId;
      this.dynamicLoadingService.triggerPremiseComponentLoading({investmentId: this.investmentId});
    }
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
