import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppLanguage } from '@shared/enums/language.enum';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly defaultLang: AppLanguage = AppLanguage.Ukrainian;

  constructor(private translate: TranslateService) {}

  initLang(): void {
    const savedLang = localStorage.getItem('appLang') as AppLanguage;

    if (savedLang && Object.values(AppLanguage).includes(savedLang)) {
      this.translate.setDefaultLang(savedLang);
      this.translate.use(savedLang);
    } else {
      this.translate.setDefaultLang(this.defaultLang);
      this.translate.use(this.defaultLang);
      localStorage.setItem('appLang', this.defaultLang);
    }
  }

  changeLang(lang: AppLanguage): void {
    this.translate.use(lang);
    localStorage.setItem('appLang', lang);
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }
}
