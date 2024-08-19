import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {ConstantsService} from "./constants.service";
import {SearchResultTranslationModel} from "../models/searchResultTranslation.model";
import {SearchResultDictionaryModel} from "../models/searchResultDictionary.model";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en');
  language$: Observable<string> = this.currentLanguage.asObservable();

  constructor(private http: HttpClient,
              private constantsService: ConstantsService
  ) {
    const storedLang = localStorage.getItem('preferredLanguage') ?? 'en';
    this.currentLanguage.next(storedLang);
  }

  setLanguage(language: string): void {
    this.currentLanguage.next(language);
    localStorage.setItem('preferredLanguage', language);
  }

  getLanguage(): string {
    return this.currentLanguage.value;
  }

  getTranslation(entityId: number, domain: string, key: string): Observable<SearchResultTranslationModel> {
    const languageCode = this.getLanguage();
    return this.http.get<SearchResultTranslationModel>(
      this.constantsService.getApiTranslationEndpoint(entityId, domain, key) + `?languageCode=${languageCode}`
    );
  }

  getDictionary(domain: string, key: string): Observable<SearchResultDictionaryModel> {
    const languageCode = this.getLanguage();
    return this.http.get<SearchResultDictionaryModel>(
      this.constantsService.getApiDictionaryEndpoint(domain, key) + `?languageCode=${languageCode}`
    );
  }

}
