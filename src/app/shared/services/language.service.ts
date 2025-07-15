import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppLanguage } from '@shared/enums/language.enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly defaultLang: AppLanguage = AppLanguage.Ukrainian;
  private readonly supportedLangs = Object.values(AppLanguage);

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {}

  initLang(): void {
    const urlLang = this.router.url.split('/')[1] as AppLanguage;
    const langToUse = this.supportedLangs.includes(urlLang) ? urlLang : this.defaultLang;

    this.translate.setDefaultLang(langToUse);
    this.translate.use(langToUse);
  }

  changeLang(lang: AppLanguage): void {
    this.translate.use(lang);
    this.router.navigate([`/${lang}`]);
  }

  getCurrentLang(): string {
    return this.translate.currentLang || this.defaultLang;
  }
}
