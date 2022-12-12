import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './calc.component';
import { MaterialModule } from '../material/material.module';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [
    CalcComponent
  ],
  imports: [
    UiModule,
    CommonModule,
    CalcRoutingModule,
    MaterialModule
  ]
})
export class CalcModule { }
