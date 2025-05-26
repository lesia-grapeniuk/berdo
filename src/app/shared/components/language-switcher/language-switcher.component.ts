import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLanguage } from '@shared/enums/language.enum';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  lang = AppLanguage;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.lang.Ukrainian);
    this.translate.use(this.lang.Ukrainian);
  }

  changeLang(lang: AppLanguage) {
    this.translate.use(lang);
  }
}
