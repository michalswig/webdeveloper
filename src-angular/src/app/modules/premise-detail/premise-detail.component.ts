import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DynamicComponentLoadingService} from "../core/services/dynamic-component-loading.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-premise-detail',
  template: '', // No HTML content, it's a dynamic loader only
  styleUrls: ['./premise-detail.component.scss']
})
export class PremiseDetailComponent implements OnInit, OnDestroy {
  private premiseId = '';
  private routeSub!: Subscription;

  constructor(
    private dynamicLoadingService: DynamicComponentLoadingService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const id: string | null = params.get('id');
      this.handlePremiseIdChange(id);
    });
  }

  private handlePremiseIdChange(premiseId: string | null) {
    if (premiseId && premiseId !== this.premiseId) {
      this.premiseId = premiseId;
      this.dynamicLoadingService.triggerPremiseDetailComponentLoading({premiseId: this.premiseId});
    }
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
