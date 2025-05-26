import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin, map } from 'rxjs';
import { RouteCard } from '../interfaces/route-card';
import { RouteKey } from '@shared/enums/routeKeyTrackCarrousel.enams';
import { ROUTE_VIDEO_MAP } from '@shared/data/route-data';

@Injectable({ providedIn: 'root' })
export class RouteService {
  constructor(private translate: TranslateService) {}

  getRouteCards(): Observable<RouteCard[]> {
    const keys = Object.values(RouteKey);

    const translations = keys.map((key) =>
      this.translate.get([
        `${key}.level`,
        `${key}.title`,
        `${key}.points`,
        `${key}.description`,
        `${key}.price`
      ]).pipe(
        map(data => ({
          level: data[`${key}.level`],
          title: data[`${key}.title`],
          points: data[`${key}.points`],
          description: data[`${key}.description`],
          price: data[`${key}.price`],
          videoUrl: ROUTE_VIDEO_MAP[key]
        }))
      )
    );

    return forkJoin(translations);
  }
}
