import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastingRoutingModule } from './forecasting-routing.module';
import { ForecastingComponent } from './forecasting.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [ForecastingComponent, MapComponent],
  imports: [
    CommonModule,
    ForecastingRoutingModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      // AIzaSyC4JeBC2rMF3o3gOZ_nv-9jFDoJzLTH1eg
      apiKey: 'AIzaSyAl1o4D1CnF4ubKMv_y-JY7Nb9moHmewBw'
    })
  ]
})
export class ForecastingModule { }
