import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DefaultComponent} from './default/default.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, TranslateModule, MaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, DefaultComponent,
  ]
})
export class SharedModule {
}
