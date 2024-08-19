import {NgModule} from '@angular/core';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule {
}
