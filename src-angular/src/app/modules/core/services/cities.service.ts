import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {interval, Observable, of, switchMap, tap} from "rxjs";
import {SearchResultCityModel} from "../models/searchResultCity.model";
import {ConstantsService} from "./constants.service";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private apiUrl = this.constantsService.API_CITIES_BY_DEVELOPER_ENDPOINT;
  private cache!: SearchResultCityModel;
  private lastUpdated: number = 0;
  private updateInterval = 60000; // 15 sec in milliseconds

  constructor(private http: HttpClient, private constantsService: ConstantsService) {
    this.startPeriodicUpdate()
  }

  private startPeriodicUpdate(): void {
    interval(this.updateInterval).pipe(
      switchMap(() => {
        return this.fetchDataFromAPI();
      })
    ).subscribe();
  }

  getCities(): Observable<SearchResultCityModel> {
    if(this.cache){
      return of(this.cache);
    } else {
      return this.fetchDataFromAPI();
    }
  }

  private fetchDataFromAPI(): Observable<SearchResultCityModel> {
    return this.http.get<SearchResultCityModel>(`${this.apiUrl}`).pipe(
      tap(data => {
        if (this.isDataUpdated(data)) {
          this.cache = data;
          this.lastUpdated = new Date().getTime();
        } else {
          console.log('City Data is not updated');
        }
      })
    );
  }

  private isDataUpdated(newData: SearchResultCityModel): boolean {
    if (!this.cache || this.cache.cities.length !== newData.cities.length) {
      // console.log('CIty is DataUpdated Cache is empty or data length is different')
      return true;
    }
    // Create sets of IDs for easy comparison
    const cachedIds = new Set(this.cache.cities.map(investment => investment.id));
    const newIds = new Set(newData.cities.map(investment => investment.id));
    // Check if every ID in the new data exists in the cache
    for (const id of newIds) {
      if (!cachedIds.has(id)) {
        return true;
      }
    }
    // Check if every ID in the cache exists in the new data
    for (const id of cachedIds) {
      if (!newIds.has(id)) {
        return true;
      }
    }
    // If no changes are found
    return false;
  }


}
