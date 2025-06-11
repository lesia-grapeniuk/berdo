import { Routes } from "@angular/router";
import { PolicePageComponent } from "@shared/components/police-page/police-page.component";

export const routes: Routes = [
  {
    path: "home-page",
    loadComponent: () =>
      import("./features/dashboard/home-page/home-page.component").then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: "policy",
    component: PolicePageComponent,
  },
  {
    path: "**",
    redirectTo: "home-page",
    pathMatch: "full",
  },
];

