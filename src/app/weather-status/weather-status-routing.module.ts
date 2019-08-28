import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherStatusComponent } from './weather-status.component';


const routes: Routes = [
  {path: '', component: WeatherStatusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherStatusRoutingModule { }
