import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {DodeHeaderComponent} from "./components/header/dode-header/dode-header.component";
import {AntalHeaderComponent} from "./components/header/antal-header/antal-header.component";
import {FooterAntalComponent} from './components/footer/footer-antal/footer-antal.component';
import {FooterDodeComponent} from './components/footer/footer-dode/footer-dode.component';


@NgModule({
  declarations: [
    DodeHeaderComponent,
    AntalHeaderComponent,
    FooterAntalComponent,
    FooterDodeComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    DodeHeaderComponent,
    AntalHeaderComponent,
    FooterAntalComponent,
    FooterDodeComponent
  ]
})
export class CoreModule {
}
