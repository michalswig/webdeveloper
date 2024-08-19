import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';

import {SharedModule} from "../shared/shared.module";
import {HomeDodeComponent} from './home-dode/home-dode.component';
import {HomeAntalComponent} from './home-antal/home-antal.component';

@NgModule({
  declarations: [
    HomeDodeComponent,
    HomeAntalComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: []
})
export class HomeModule {
}
