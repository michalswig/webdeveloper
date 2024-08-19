import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectOverviewComponent} from "./project-overview.component";

const routes: Routes = [
  {path: 'project-overview', component: ProjectOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectOverviewRoutingModule {
}
