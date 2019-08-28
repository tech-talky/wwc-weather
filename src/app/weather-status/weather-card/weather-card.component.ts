import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  @Input() city: City;
  weatherReport: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/blr-weather.json').subscribe(report => this.weatherReport = report);
  }

}
