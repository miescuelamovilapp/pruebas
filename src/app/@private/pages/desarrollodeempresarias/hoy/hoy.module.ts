import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoyRoutingModule } from './hoy-routing.module';
import { HoyComponent } from './hoy.component';

@NgModule({
  declarations: [HoyComponent],
  imports: [
    CommonModule,
    HoyRoutingModule
  ]
})
export class HoyModule { }
