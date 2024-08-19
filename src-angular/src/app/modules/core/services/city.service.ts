import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {CityResponse} from "../models/city.model";
import {ConstantsService} from "./constants.service";
import {SearchResultCityModel} from "../models/searchResultCity.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient, private constantService: ConstantsService) { }

  fetchCities(): Observable<SearchResultCityModel> {
    return this.http.get<SearchResultCityModel>(this.constantService.API_CITIES_ENDPOINT);
  }

}
