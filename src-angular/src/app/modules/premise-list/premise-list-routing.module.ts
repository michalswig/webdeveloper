import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PremiseListComponent} from "./premise-list.component";

const routes: Routes = [
  {path: 'premises/:id', component: PremiseListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PremiseListRoutingModule { }
