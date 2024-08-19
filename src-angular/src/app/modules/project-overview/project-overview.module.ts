import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectOverviewRoutingModule} from './project-overview-routing.module';
import {ProjectOverviewComponent} from './project-overview.component';
import {SharedModule} from "../shared/shared.module";
import {ScreenshotDialogComponent} from './screenshot-dialog/screenshot-dialog.component';

@NgModule({
  declarations: [
    ProjectOverviewComponent,
    ScreenshotDialogComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectOverviewRoutingModule
  ],
  exports: [
    ProjectOverviewComponent
  ]
})
export class ProjectOverviewModule {
}
