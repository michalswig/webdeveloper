import {Injectable} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
import {LanguageService} from "./language.service";

@Injectable()
export class AcceptLanguageInterceptor implements HttpInterceptor {

  constructor(private languageService: LanguageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const language = this.languageService.getLanguage();
    const modifiedReq = req.clone({headers: req.headers.set('Accept-Language', language)});
    return next.handle(modifiedReq);
  }

}
