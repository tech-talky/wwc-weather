import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'weather-status', pathMatch: 'full' },
  { path: 'weather-status', loadChildren: './weather-status/weather-status.module#WeatherStatusModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
