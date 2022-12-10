import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NumbersComponent } from './ui/buttons/numbers/numbers.component';
import { SymbolsComponent } from './ui/buttons/symbols/symbols.component';
import { KeyboardComponent } from './ui/keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    SymbolsComponent,
    KeyboardComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
