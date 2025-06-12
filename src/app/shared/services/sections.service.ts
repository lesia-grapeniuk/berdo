import { Injectable } from "@angular/core";
import { SectionId } from "@shared/enums/section.enum";

@Injectable({
  providedIn: "root",
})
export class SectionsService {
  public sectionIds: SectionId[] = [
    SectionId.Home,
    SectionId.Advantages,
    SectionId.Location,
    SectionId.Tours,
    SectionId.Reviews,
    SectionId.GalleryPhotos,
    SectionId.Instructors,
    SectionId.Pricing,
    SectionId.Contact,
  ];

  scrollToSection(id: SectionId) {
    const el = document.getElementById(id);
    if (!el) return;

    const targetY = el.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 800; // мс
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    requestAnimationFrame(animateScroll);
  }
}
