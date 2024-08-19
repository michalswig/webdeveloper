import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PremiseDetailComponent} from "./premise-detail.component";

const routes: Routes = [
  {path: 'premise/:id', component: PremiseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PremiseDetailRoutingModule { }
