import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
