import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicComponentLoadingService} from "../core/services/dynamic-component-loading.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-investment-list',
  template: '', // No HTML content, it's a dynamic loader only
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent implements OnInit, OnDestroy {
  private cityId = '';
  private routeSub!: Subscription;

  constructor(
    private dynamicLoadingService: DynamicComponentLoadingService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const id: string | null = params.get('id');
      this.handleCityNameChange(id);
    });
  }

  private handleCityNameChange(newCityId: string | null) {
    if (newCityId && newCityId !== this.cityId) {
      this.cityId = newCityId;
      this.dynamicLoadingService.triggerInvestmentComponentLoading({cityId: this.cityId});
    }
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
