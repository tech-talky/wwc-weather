import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastingComponent } from './forecasting.component';


const routes: Routes = [
  {path: '', component: ForecastingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastingRoutingModule { }
