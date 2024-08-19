import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SearchResultPremiseModel} from "../models/searchResultPremise.model";
import {ConstantsService} from "./constants.service";
import {EnhancedPremiseModel} from "../models/enhancedPremise.model";
import {PremiseResponse} from "../models/premise.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PremiseService {

  constructor(private http: HttpClient,
              private constanceService: ConstantsService) {
  }

  getPremiseById(id: string) {
    return this.http.get<SearchResultPremiseModel>(this.constanceService.getApiPremiseByIdEndpoint(id));
  }

  getPremisesByInvestmentIdAndSetTranslation(id: number) {
    return this.http.get<SearchResultPremiseModel>(this.constanceService.getApiPremisesByInvestmentEndpointAndSetTranslation(id));
  }

  getPremisesByInvestmentId(id: number) {
    return this.http.get<SearchResultPremiseModel>(this.constanceService.getApiPremisesByInvestmentEndpoint(id));
  }

  getPremiseMinMaxTotalPriceByInvestmentId(id: number) {
    return this.http.get<EnhancedPremiseModel>(this.constanceService.getApiPremiseMinMaxTotalPriceByInvestmentId(id));
  }

  createPremise(premiseData: PremiseResponse): Observable<PremiseResponse> {
    return this.http.post<PremiseResponse>(this.constanceService.getApiCreatePremiseEndpoint(), premiseData);
  }

  updatePremise(premiseId: string, premiseData: PremiseResponse): Observable<PremiseResponse> {
    return this.http.put<PremiseResponse>(this.constanceService.getApiUpdatePremiseEndpoint(premiseId), premiseData);
  }

  deletePremise(premiseId: string): Observable<void> {
    return this.http.delete<void>(this.constanceService.getApiDeletePremiseEndpoint(premiseId));
  }

}
