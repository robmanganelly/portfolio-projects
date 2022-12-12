import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  {
    path: 'calculator',
    loadChildren: () => import('./calc/calc.module').then((m) => m.CalcModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
