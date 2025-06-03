import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppLanguage } from "@shared/enums/language.enum";
import { LanguageService } from "@shared/services/language.service";

@Component({
  selector: "app-language-switcher",
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: "./language-switcher.component.html",
  styleUrl: "./language-switcher.component.scss",
})
export class LanguageSwitcherComponent {
  constructor(private languageService: LanguageService) {
    this.languageService.initLang();
  }

  changeLang(lang: string) {
    this.languageService.changeLang(lang as AppLanguage);
  }
}
