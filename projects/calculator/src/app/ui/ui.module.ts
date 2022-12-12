import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { SymbolsComponent } from './buttons/symbols/symbols.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    SymbolsComponent,
    KeyboardComponent,
    DisplayComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
  ],
  exports:[
    SymbolsComponent,
    KeyboardComponent,
    DisplayComponent,
  ]
})
export class UiModule { }
