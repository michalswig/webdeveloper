import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly API_SYSTEM_CONFIG = environment.API_SYSTEM_CONFIG;
  private readonly API_BASE_URL = environment.API_BASE_URL;
  readonly API_CITIES_BY_DEVELOPER_ENDPOINT = `${this.API_BASE_URL}${environment.API_CITIES_BY_DEVELOPER_ENDPOINT}`;
  readonly API_CITIES_ENDPOINT = `${this.API_BASE_URL}${environment.API_CITIES_ENDPOINT}`;
  readonly API_DEVELOPER_BY_SYSTEM_CODE_ENDPOINT = `${this.API_BASE_URL}${environment.API_DEVELOPER_BY_SYSTEM_CODE_ENDPOINT}`;
  readonly API_INVESTMENTS_ENDPOINT = `${this.API_BASE_URL}${environment.API_INVESTMENTS_ENDPOINT}`;
  readonly API_PREMISES_ENDPOINT = `${this.API_BASE_URL}${environment.API_PREMISES_ENDPOINT}`;
  readonly API_LOGIN_ENDPOINT = `${this.API_BASE_URL}${environment.API_LOGIN_ENDPOINT}`;
  readonly ERROR_MESSAGE = environment.ERROR_MESSAGE;
  readonly API_ENCRYPTION_KEY = `${this.API_BASE_URL}${environment.API_ENCRYPTION_KEY}`;
  readonly attributes = environment.attributes;

  getApiSoftDeleteDeveloperEndpoint(developerId: number): string {
    return `${this.API_BASE_URL}/developers/${developerId}`;
  }
  getApiRegisterDeveloperEndpoint(): string {
    return `${this.API_BASE_URL}/developers/register`;
  }
  getApiUpdateDeveloperEndpoint(developerId: number): string {
    return `${this.API_BASE_URL}/developers/${developerId}`;
  }
  getApiPremisesByInvestmentEndpointAndSetTranslation(investmentId: number): string {
    return `${this.API_BASE_URL}/premises/investment/${investmentId}`;
  }
  getApiPremisesByInvestmentEndpoint(investmentId: number): string {
    return `${this.API_BASE_URL}/premises/dashboard/investment/${investmentId}`;
  }
  getApiPremiseMinMaxTotalPriceByInvestmentId(investmentId: number): string {
    return `${this.API_BASE_URL}/premises/investment/${investmentId}/enhancedPremiseData`;
  }
  getApiPremiseByIdEndpoint(premiseId: string): string {
    return `${this.API_BASE_URL}/premises/${premiseId}`;
  }
  getApiCreatePremiseEndpoint(): string {
    return `${this.API_PREMISES_ENDPOINT}`;
  }
  getApiUpdatePremiseEndpoint(premiseId: string): string {
    return `${this.API_PREMISES_ENDPOINT}/${premiseId}`;
  }
  getApiDeletePremiseEndpoint(premiseId: string): string {
    return `${this.API_PREMISES_ENDPOINT}/${premiseId}`;
  }
  getApiInvestmentByPremiseIdEndpoint(premiseId: string): string {
    return `${this.API_BASE_URL}/investmentByPremiseId/${premiseId}`;
  }
  getApiTranslationEndpoint(entityId: number, domain: string, key: string): string {
    return `${this.API_BASE_URL}/system/${entityId}/${domain}/${key}`;
  }
  getApiDictionaryEndpoint(domain: string, key: string): string {
    return `${this.API_BASE_URL}/system/dictionary/${domain}/${key}`;
  }
  getApiLoginEndpoint(): string {
    return this.API_LOGIN_ENDPOINT;
  }
  getApiEncryptionKeyEndpoint(): string {
    return this.API_ENCRYPTION_KEY;
  }
  getApiAllActiveDevelopersEndpoint(): string {
    return `${this.API_BASE_URL}/developers/`;
  }
  getCryptoKey(): string {
    return environment.cryptoKey;
  }

}
