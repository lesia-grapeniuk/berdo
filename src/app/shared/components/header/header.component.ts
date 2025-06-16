import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import {
  fadeExpand,
  fadeInOut,
  slideInOutRightToLeft,
} from "@shared/animations/global-animations";
import { SectionId } from "@shared/enums/section.enum";
import { SectionsService } from "@shared/services/sections.service";
import { UiKitModule } from "@shared/UI-KIT/ui-kit.module";
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-header",
  imports: [UiKitModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  animations: [fadeExpand, fadeInOut, slideInOutRightToLeft],
})
export class HeaderComponent {
  public menuOpen = false;
  public isScrolled = false;
  public sectionId = SectionId;

  constructor(public sectionsService: SectionsService) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 70;
  }
  scrollTo(id: SectionId) {
    this.sectionsService.scrollToSection(id);
    this.menuOpen = false;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu(): void {
    this.menuOpen = false;
  }
}
