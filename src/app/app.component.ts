import { Component, LOCALE_ID, Inject, AfterViewInit } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';
  getLangs;
  currentLang;

  languages = [
    { code: 'en', label: 'English'},
    { code: 'es', label: 'Español'},
    { code: 'fr', label: 'Français'}
  ];

  param = {value: 'world'};
  
  constructor(@Inject(LOCALE_ID) protected localeId: string,public translate: TranslateService) {
  	translate.addLangs(['en', 'fr', 'jp']);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    console.log(browserLang);
    translate.use(browserLang.match(/en|fr|jp/) ? browserLang : 'en');
  
  }

  ngAfterViewInit() {

  }
}
