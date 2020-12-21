import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarempresariasComponent } from './agregarempresarias.component'

const routes: Routes = [
  {
    path: '', component: AgregarempresariasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarempresariasRoutingModule { }
