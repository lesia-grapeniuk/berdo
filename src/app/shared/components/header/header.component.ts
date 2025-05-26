import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionId } from '@shared/enums/section.enum';
import { SectionService } from '@shared/services/section.service';
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

  constructor(public sectionService: SectionService) {}

  scrollTo(id: SectionId) {
    this.sectionService.scrollToSection(id);
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
