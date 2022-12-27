import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTrayComponent } from './task-tray/task-tray.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component: TaskTrayComponent},
  {path:'**', pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
