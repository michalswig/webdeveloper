import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home-dode',
  templateUrl: './home-dode.component.html',
  styleUrls: ['./home-dode.component.scss']
})
export class HomeDodeComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en')
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }


}
