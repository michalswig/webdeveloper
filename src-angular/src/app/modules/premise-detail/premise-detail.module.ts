import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PremiseDetailRoutingModule} from './premise-detail-routing.module';
import {PremiseDetailComponent} from './premise-detail.component';
import {PremiseDetailDodeComponent} from './premise-detail-dode/premise-detail-dode.component';
import {PremiseDetailAntalComponent} from './premise-detail-antal/premise-detail-antal.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PremiseDetailComponent,
    PremiseDetailDodeComponent,
    PremiseDetailAntalComponent
  ],
  imports: [
    CommonModule,
    PremiseDetailRoutingModule,
    SharedModule
  ],
  exports: [
    PremiseDetailDodeComponent,
    PremiseDetailAntalComponent
  ]
})
export class PremiseDetailModule {
}
