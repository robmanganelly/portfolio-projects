import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeuiModule } from './primeui/primeui.module';
import { TaskComponent } from './task/task.component';
import { TaskTrayComponent } from './task-tray/task-tray.component';
import { ControlsComponent } from './controls/controls.component';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskTrayComponent,
    ControlsComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeuiModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
