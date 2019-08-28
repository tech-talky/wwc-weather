import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { City } from './models/models';

@Component({
  selector: 'app-weather-status',
  templateUrl: './weather-status.component.html',
  styleUrls: ['./weather-status.component.css']
})
export class WeatherStatusComponent {
  title = 'wwc-weather-ugbj-ikjl';
  searchTerm: string;

  selectedCities: City[];

  dashboardCities: City[] = [];

  constructor(private searchService: SearchService) {}

  onSearchTermChanged(newString: string) {
    if (newString.length < 3) {
      return;
    }
    this.selectedCities = this.searchService.getCitiesForString(newString);
  }

  addToDashboard(city: City) {
    this.dashboardCities.push(city);
  }

}