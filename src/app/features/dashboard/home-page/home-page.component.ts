import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component';
import { TrackCarrouselComponent } from "@shared/components/track-carrousel/track-carrousel.component";
import { SectionService } from '@shared/services/section.service';
import { SectionId } from '@shared/enums/section.enum';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    LanguageSwitcherComponent,
    TrackCarrouselComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('parallaxSection') parallaxSectionRef!: ElementRef;
  @ViewChild('mainScreenSection') mainScreenRef!: ElementRef;
  @ViewChild('backgroundVideo') backgroundVideoRef!: ElementRef;
  @ViewChildren('animated') animatedBlocks!: QueryList<ElementRef>;
  @ViewChildren('animatedTitle') titles!: QueryList<ElementRef>;
  @ViewChildren('leftParallax') leftEls!: QueryList<ElementRef>;
  @ViewChildren('rightParallax') rightEls!: QueryList<ElementRef>;
  @ViewChildren('upParallax') upEls!: QueryList<ElementRef>;

  hideVideo = false;
  SectionId = SectionId; // щоб використовувати в шаблоні

  constructor(private sectionService: SectionService) {}

  onNavigateTo(section: SectionId) {
    this.sectionService.scrollToSection(section);
  }
  
  ngAfterViewInit(): void {
    // Встановлення паддінгу для наступної секції
    const mainScreenHeight = this.mainScreenRef.nativeElement.offsetHeight;
    this.parallaxSectionRef.nativeElement.style.paddingTop = `${mainScreenHeight * 1.01}px`;

    // Анімації (IntersectionObserver)
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.animatedBlocks.forEach((el) => observer.observe(el.nativeElement));
    this.titles.forEach((el) => observer.observe(el.nativeElement));
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY;

    // Приховуємо відео при прокрутці
    if (this.mainScreenRef) {
      const threshold = this.mainScreenRef.nativeElement.offsetHeight * 0.9;
      this.hideVideo = scrollY > threshold;
    }

    // Паралакс-ефекти
    this.leftEls.forEach(el => {
      el.nativeElement.style.transform = `translateX(-${scrollY * 0.4}px)`;
    });
    this.rightEls.forEach(el => {
      el.nativeElement.style.transform = `translateX(${scrollY * 0.4}px)`;
    });
    this.upEls.forEach(el => {
      el.nativeElement.style.transform = `translateY(${scrollY * -0.2}px)`;
    });

    if (this.backgroundVideoRef?.nativeElement) {
      this.backgroundVideoRef.nativeElement.style.transform = `translateY(${scrollY * 0.8}px)`;
    }

    // Додаткові fade-in елементи
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('in-view');
      }
    });
  }
}
