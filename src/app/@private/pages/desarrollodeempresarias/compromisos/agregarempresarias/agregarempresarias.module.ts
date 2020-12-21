import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgregarempresariasRoutingModule } from './agregarempresarias-routing.module';
import { AgregarempresariasComponent } from './agregarempresarias.component';


@NgModule({
  declarations: [AgregarempresariasComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgregarempresariasRoutingModule
  ]
})
export class AgregarempresariasModule { }
