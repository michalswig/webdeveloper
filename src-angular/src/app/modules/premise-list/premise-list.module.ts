import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PremiseListRoutingModule} from './premise-list-routing.module';
import {PremiseListComponent} from './premise-list.component';
import {SharedModule} from "../shared/shared.module";
import {PremiseListDodeComponent} from './premise-list-dode/premise-list-dode.component';
import {PremiseDodeComponent} from './premise-list-dode/premise-dode/premise-dode.component';
import {PremiseListAntalComponent} from './premise-list-antal/premise-list-antal.component';
import {PremiseAntalComponent} from './premise-list-antal/premise-antal/premise-antal.component';
import {PremiseListFilterModule} from "../premise-list-filter/premise-list-filter.module";


@NgModule({
  declarations: [
    PremiseListComponent,
    PremiseListDodeComponent,
    PremiseDodeComponent,
    PremiseListAntalComponent,
    PremiseAntalComponent
  ],
  imports: [
    CommonModule,
    PremiseListRoutingModule,
    SharedModule,
    PremiseListFilterModule
  ],
  exports: [
    PremiseListComponent,
    PremiseListDodeComponent,
    PremiseDodeComponent,
    PremiseListAntalComponent,
    PremiseAntalComponent
  ]
})
export class PremiseListModule {
}
