import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { UiKitModule } from "@shared/UI-KIT/ui-kit.module";

@Component({
  selector: "app-reviews",
  standalone: true,
  imports: [TranslateModule, UiKitModule, CommonModule],
  templateUrl: "./reviews.component.html",
  styleUrl: "./reviews.component.scss",
})

export class ReviewsComponent {
  public reviews = [
    {
      nameKey: "reviews.dmytro.name",
      textKey: "reviews.dmytro.text",
      instagram: "https://www.instagram.com/true_dmytro?igsh=MWxtc3N5a2gyY2NodQ==",
      image: "assets/images/gallery-photos/top-left.webp",
    },
    {
      nameKey: "reviews.artem.name",
      textKey: "reviews.artem.text",
      instagram: "https://www.instagram.com/serdtsev.artem?igsh=MTMwNDFoMWpnZjEwdw==",
      image: "assets/images/gallery-photos/top-left.webp",
    },
    {
      nameKey: "reviews.denys.name",
      textKey: "reviews.denys.text",
      instagram: "https://surl.li/wehlwu",
      image: "assets/images/gallery-photos/top-left.webp",
    },
    {
      nameKey: "reviews.artemT.name",
      textKey: "reviews.artemT.text",
      instagram: "https://surl.li/wehlwu",
      image: "assets/images/gallery-photos/top-left.webp",
    },
    {
      nameKey: "reviews.alexander.name",
      textKey: "reviews.alexander.text",
      instagram: "https://surl.li/wehlwu",
      image: "assets/images/gallery-photos/top-left.webp",
    }
  ];
}
