import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { UiKitModule } from "@shared/UI-KIT/ui-kit.module";
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-reviews",
  standalone: true,
  imports: [CommonModule, TranslateModule, UiKitModule],
  templateUrl: "./reviews.component.html",
  styleUrl: "./reviews.component.scss",
  animations: [
    trigger("fadeInCard", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("700ms cubic-bezier(0.25, 0.8, 0.25, 1)", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ReviewsComponent {
  public currentIndex = 0;

  public reviews = [
    {
      nameKey: "reviews.dmytro.name",
      textKey: "reviews.dmytro.text",
      instagram:
        "https://www.instagram.com/true_dmytro?igsh=MWxtc3N5a2gyY2NodQ==",
      image: "assets/images/reviews/dmytro.webp",
    },
    {
      nameKey: "reviews.artem.name",
      textKey: "reviews.artem.text",
      instagram:
        "https://www.instagram.com/serdtsev.artem?igsh=MTMwNDFoMWpnZjEwdw==",
      image: "assets/images/reviews/artem.webp",
    },
    {
      nameKey: "reviews.denys.name",
      textKey: "reviews.denys.text",
      instagram: "https://surl.li/wehlwu",
      image: "assets/images/reviews/denys.webp",
    },
    {
      nameKey: "reviews.artemT.name",
      textKey: "reviews.artemT.text",
      instagram: "https://surl.li/wehlwu",
      image: "assets/images/reviews/artemT.webp",
    },
    {
      nameKey: "reviews.alexander.name",
      textKey: "reviews.alexander.text",
      instagram: "https://surl.li/wehlwu",
      image: "assets/images/reviews/sasha.webp",
    },
  ];

  get currentReview() {
    return this.reviews[this.currentIndex];
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.reviews.length - 1) {
      this.currentIndex++;
    }
  }
}
