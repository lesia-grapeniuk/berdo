import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, forkJoin, map } from "rxjs";
import { RouteCard } from "../interfaces/route-card";
import { RouteKey } from "@shared/enums/routeKeyTrackCarrousel.enams";
import { ROUTE_VIDEO_MAP } from "@shared/data/route-data";

@Injectable({ providedIn: "root" })
export class RouteService {
  constructor(private translate: TranslateService) {}

  getRouteCards(): Observable<RouteCard[]> {
    const keys = Object.values(RouteKey);

    const translations = keys.map((key) =>
      this.translate
        .get([
          `${key}.level`,
          `${key}.title`,
          `${key}.points`,
          `${key}.description`,
          `${key}.price`,
        ])
        .pipe(
          map((data) => ({
            level: `${key}.level`,
            title: `${key}.title`,
            points: [
              `${key}.points.0`,
              `${key}.points.1`,
              `${key}.points.2`,
              `${key}.points.3`,
            ],
            description: `${key}.description`,
            price: `${key}.price`,
            videoUrl: ROUTE_VIDEO_MAP[key],
          }))
        )
    );

    return forkJoin(translations);
  }
}
