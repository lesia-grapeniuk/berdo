import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RouteCard } from "@shared/interfaces/route-card";
import { BookingTripComponent } from "../buttons/booking-trip/booking-trip.component";
import { FormsModule } from "@angular/forms";
import { RouteService } from "@shared/services/route-track-carrousel.service";
import { fadeExpand, fadeInOut } from "@shared/animations/global-animations";

@Component({
  selector: "app-track-carrousel",
  imports: [CommonModule, TranslateModule, BookingTripComponent, FormsModule],
  templateUrl: "./track-carrousel.component.html",
  styleUrl: "./track-carrousel.component.scss",
  animations: [fadeInOut, fadeExpand],
})
export class TrackCarrouselComponent implements OnInit {
  public cardsRoute: RouteCard[] = [];
  public activeSlideIndex = 0;
  isMobile = false;
  openStates: boolean[] = [];

  @ViewChildren("carouselVideo") carouselVideos!: QueryList<
    ElementRef<HTMLVideoElement>
  >;

  constructor(private routeService: RouteService) {}

  @HostListener("window:resize")
  onResize() {
    this.isMobile = window.innerWidth <= 768.98;

    this.setInitialOpenStates();
  }

  ngOnInit(): void {
    this.routeService.getRouteCards().subscribe((cards) => {
      this.cardsRoute = cards;
      this.setInitialOpenStates();
    });

    this.onResize();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.playActiveVideo(), 200);
  }
  playActiveVideo(): void {
    this.carouselVideos?.forEach((video, index) => {
      if (index === this.activeSlideIndex) {
        const v = video.nativeElement;
        v.load();
        v.play().catch((e) => console.warn("Chrome autoplay failed:", e));
      }
    });
  }

  setInitialOpenStates(): void {
    this.openStates = this.cardsRoute.map(() => !this.isMobile);
  }

  toggleList(index: number): void {
    this.openStates[index] = !this.openStates[index];
  }

  closeAllLists(): void {
    if (this.isMobile) {
      this.openStates = this.cardsRoute.map(() => false);
    }
  }

  goToSlide(index: number): void {
    this.closeAllLists();
    this.activeSlideIndex = index;
  }

  goToPreviousSlide(): void {
    this.closeAllLists();
    this.activeSlideIndex =
      (this.activeSlideIndex - 1 + this.cardsRoute.length) %
      this.cardsRoute.length;
  }

  goToNextSlide(): void {
    this.closeAllLists();
    this.activeSlideIndex =
      (this.activeSlideIndex + 1) % this.cardsRoute.length;
  }

  getCardPosition(index: number): string {
    const total = this.cardsRoute.length;
    const current = this.activeSlideIndex;

    if (index === current) return "active";
    if ((index + 1) % total === current) return "left1";
    if ((index + 2) % total === current) return "left2";
    if ((index - 1 + total) % total === current) return "right1";
    if ((index - 2 + total) % total === current) return "right2";

    return "hidden";
  }
}
