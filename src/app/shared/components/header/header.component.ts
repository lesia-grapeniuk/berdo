import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionId } from '@shared/enums/section.enum';
import { SectionsService } from '@shared/services/sections.service';
import { UiKitModule } from '@shared/UI-KIT/ui-kit.module';

@Component({
  selector: 'app-header',
  imports: [UiKitModule, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public menuOpen = false;
  sectionId = SectionId;

  constructor(public sectionsService: SectionsService) {}

  scrollTo(id: SectionId) {
    this.sectionsService.scrollToSection(id);
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
