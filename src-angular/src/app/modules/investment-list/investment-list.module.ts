import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InvestmentListRoutingModule} from './investment-list-routing.module';
import {InvestmentListComponent} from './investment-list.component';
import {SharedModule} from "../shared/shared.module";
import {InvestmentListDodeComponent} from './investment-list-dode/investment-list-dode.component';
import {InvestmentListAntalComponent} from './investment-list-antal/investment-list-antal.component';
import {InvestmentAntalComponent} from './investment-list-antal/investment-antal/investment-antal.component';
import {InvestmentDodeComponent} from "./investment-list-dode/investment-dode/investment-dode.component";
import {TruncatePipe} from "../../truncate.pipe";


@NgModule({
  declarations: [
    InvestmentListComponent,
    InvestmentListDodeComponent,
    InvestmentListAntalComponent,
    InvestmentAntalComponent,
    InvestmentDodeComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    InvestmentListRoutingModule,
    SharedModule
  ],
  exports: [
    InvestmentListComponent,
    InvestmentListDodeComponent,
    InvestmentListAntalComponent,
    InvestmentAntalComponent,
    InvestmentDodeComponent,
    TruncatePipe
  ]
})
export class InvestmentListModule {
}
