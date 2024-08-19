import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {ConstantsService} from "./constants.service";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig: any = {};

  constructor(private http: HttpClient, private constantsService: ConstantsService) {
  }

  async loadAppConfig(): Promise<void> {
    this.appConfig = await firstValueFrom(this.http.get(`${this.constantsService.API_SYSTEM_CONFIG}`));
  }

  get getSystemCode(): string {
    return this.appConfig?.['system.code'];
  }

  get getLogoDeveloperUrl(): string {
    return this.appConfig?.['system.logoDeveloperEndpoint'];
  }

}
