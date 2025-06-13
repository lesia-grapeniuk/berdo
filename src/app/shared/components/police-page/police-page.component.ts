import { Component } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-police-page",
  imports: [TranslateModule, RouterModule],
  templateUrl: "./police-page.component.html",
  styleUrl: "./police-page.component.scss",
})
export class PolicePageComponent {
  constructor(private router: Router) {}

  public goBackToSection(): void {
    const section = sessionStorage.getItem("lastSection") || "";
    this.router.navigate(["/home-page"], { fragment: section });
  }
}
