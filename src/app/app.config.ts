import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

import { MyPreset } from '../../styles';
import { provideZoneChangeDetection } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DialogService } from 'primeng/dynamicdialog';
import { providePrimeNG } from 'primeng/config';

// Translate
import { TranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { httpLoaderFactory } from './translate/translate.loader'; // файл із factory

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([])),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: { darkModeSelector: false }
      }
    }),
    DialogService,
    BreakpointObserver,

    TranslateModule.forRoot({
      defaultLanguage: 'uk',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers!
  ]
};
