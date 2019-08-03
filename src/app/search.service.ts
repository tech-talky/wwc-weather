import { Injectable } from '@angular/core';
import { City } from './models/models';
import indianCities from '../assets/ind-cities.json';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  getCitiesForString(enteredString: string): City[] {
    return indianCities.filter(city => {
      return city.name.toLowerCase().indexOf(enteredString.toLowerCase()) >= 0;
    });
  }
}
