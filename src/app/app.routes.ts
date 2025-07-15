import { Routes } from "@angular/router";
import { PolicePageComponent } from "@shared/components/police-page/police-page.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'uk',
    pathMatch: 'full',
  },
  {
    path: ':lang',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/home-page/home-page.component').then(
            (m) => m.HomePageComponent
          ),
        pathMatch: 'full',
      },
      {
        path: 'policy',
        component: PolicePageComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      }
    ],
  },
];
