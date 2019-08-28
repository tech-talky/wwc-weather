import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherStatusRoutingModule } from './weather-status-routing.module';
import { WeatherStatusComponent } from './weather-status.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    WeatherStatusComponent,
    WeatherCardComponent
  ],
  imports: [
    FormsModule,
    ClarityModule,
    CommonModule,
    WeatherStatusRoutingModule
  ]
})
export class WeatherStatusModule { }
