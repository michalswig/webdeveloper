import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SearchResultDeveloperModel} from "../models/searchResultDeveloper.model";
import {Observable} from "rxjs";
import {ConstantsService} from "./constants.service";
import {DeveloperResponse} from "../models/developer.model";

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(private http: HttpClient, private constantsService: ConstantsService) {
  }

  fetchAllDevelopers(): Observable<SearchResultDeveloperModel> {
    return this.http.get<SearchResultDeveloperModel>(this.constantsService.getApiAllActiveDevelopersEndpoint());
  }

  fetchDevelopers(): Observable<SearchResultDeveloperModel> {
    return this.http.get<SearchResultDeveloperModel>(this.constantsService.API_DEVELOPER_BY_SYSTEM_CODE_ENDPOINT);
  }

  addDeveloper(developer: DeveloperResponse): Observable<void> {
    return this.http.post<void>(this.constantsService.getApiRegisterDeveloperEndpoint(), developer);
  }

  updateDeveloper(developer: DeveloperResponse): Observable<void> {
    return this.http.put<void>(this.constantsService.getApiUpdateDeveloperEndpoint(developer.id), developer);
  }

  deleteDeveloper(developerId: number): Observable<void> {
    return this.http.delete<void>(this.constantsService.getApiSoftDeleteDeveloperEndpoint(developerId));
  }


}
