import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DynamicComponentLoadingService {
  private investmentComponentTrigger: Subject<any> = new Subject<any>();
  private premiseComponentTrigger: Subject<any> = new Subject<any>();
  private premiseDetailComponentTrigger: Subject<any> = new Subject<any>();

  triggerInvestmentComponentLoading(data: any) {
    this.investmentComponentTrigger.next(data);
  }

  triggerPremiseComponentLoading(data: any) {
    this.premiseComponentTrigger.next(data);
  }

  triggerPremiseDetailComponentLoading(data: any) {
    this.premiseDetailComponentTrigger.next(data);
  }

  getInvestmentComponentTrigger(): Observable<any> {
    return this.investmentComponentTrigger.asObservable();
  }

  getPremiseComponentTrigger(): Observable<any> {
    return this.premiseComponentTrigger.asObservable();
  }

  getPremiseDetailComponentTrigger(): Observable<any> {
    return this.premiseDetailComponentTrigger.asObservable();
  }

}
