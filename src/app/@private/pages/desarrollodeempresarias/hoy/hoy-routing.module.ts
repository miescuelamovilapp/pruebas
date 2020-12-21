import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoyComponent } from './hoy.component';


const routes: Routes = [
  {
    path: '', component: HoyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoyRoutingModule { }
