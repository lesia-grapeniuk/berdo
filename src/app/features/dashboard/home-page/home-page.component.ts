import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { HeaderComponent } from "@shared/components/header/header.component";
import { FooterComponent } from "@shared/components/footer/footer.component";
import { LanguageSwitcherComponent } from "@shared/components/language-switcher/language-switcher.component";
import { TrackCarrouselComponent } from "@shared/components/track-carrousel/track-carrousel.component";
import { SectionsService } from "@shared/services/sections.service";
import { SectionId } from "@shared/enums/section.enum";
import { PricingComponent } from "@shared/components/pricing/pricing.component";
import { fadeExpand, staggerFadeDown } from "@shared/animations/global-animations";
import { ReviewsComponent } from "@shared/components/reviews/reviews.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    LanguageSwitcherComponent,
    TrackCarrouselComponent,
    PricingComponent,
    ReviewsComponent,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  animations: [staggerFadeDown, fadeExpand],
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild("parallaxSection") parallaxSectionRef!: ElementRef;
  @ViewChild("mainScreenSection") mainScreenRef!: ElementRef;
  @ViewChild("backgroundVideo") backgroundVideoRef!: ElementRef;
  @ViewChildren("animated") animatedBlocks!: QueryList<ElementRef>;
  @ViewChildren("animatedTitle") titles!: QueryList<ElementRef>;
  @ViewChildren("leftParallax") leftEls!: QueryList<ElementRef>;
  @ViewChildren("rightParallax") rightEls!: QueryList<ElementRef>;
  @ViewChildren("upParallax") upEls!: QueryList<ElementRef>;
  @ViewChild("advantagesSection", { static: false })
  advantagesSectionRef!: ElementRef;

  public advantagesInView = false;
  public hideVideo = false;
  public SectionId = SectionId;
  public triggerAnimation = false;
  public expandedInstructors: { [key: string]: boolean } = {};

  constructor(private sectionsService: SectionsService) {}

  onNavigateTo(section: SectionId) {
    this.sectionsService.scrollToSection(section);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.triggerAnimation = true;
    }, 300);

    setTimeout(() => {
      const video = this.backgroundVideoRef?.nativeElement;
      if (video) {
        video.muted = true;
        video
          .play()
          .catch((e: Error) => console.warn("Autoplay failed:", e.message));
      }
    }, 0);

    // Встановлення паддінгу для наступної секції
    const mainScreenHeight = this.mainScreenRef.nativeElement.offsetHeight;
    this.parallaxSectionRef.nativeElement.style.paddingTop = `0px`;

    // Анімації (IntersectionObserver)
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.animatedBlocks.forEach((el) => observer.observe(el.nativeElement));
    this.titles.forEach((el) => observer.observe(el.nativeElement));
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth <= 778;

    // Приховуємо відео при прокрутці
    if (this.mainScreenRef) {
      const threshold = this.mainScreenRef.nativeElement.offsetHeight * 0.9;
      this.hideVideo = scrollY > threshold;
    }

    // Паралакс-ефекти
    this.leftEls.forEach((el) => {
      el.nativeElement.style.transform = `translateX(-${scrollY * 0.4}px)`;
    });
    this.rightEls.forEach((el) => {
      el.nativeElement.style.transform = `translateX(${scrollY * 0.4}px)`;
    });
    this.upEls.forEach((el) => {
      el.nativeElement.style.transform = isMobile
        ? `translateX(-${scrollY * 0.07}px)`
        : `translateY(${scrollY * 0.2}px)`;
    });

    if (this.backgroundVideoRef?.nativeElement) {
      this.backgroundVideoRef.nativeElement.style.transform = `translateY(${
        scrollY * 0.8
      }px)`;
    }

    // for animation advantages
    const section = this.advantagesSectionRef?.nativeElement;
    const rect = section.getBoundingClientRect();

    if (!this.advantagesInView && rect.top < window.innerHeight * 0.85) {
      this.advantagesInView = true;
    }

    // Додаткові fade-in елементи
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("in-view");
      }
    });
  }
  // for openning the description about instructors
  toggleExpanded(name: string): void {
    this.expandedInstructors[name] = !this.expandedInstructors[name];
  }
}
