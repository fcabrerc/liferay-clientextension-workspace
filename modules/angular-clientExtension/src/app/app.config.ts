import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withDebugTracing} from '@angular/router';

import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes,
      withDebugTracing(),
    ),
    { provide: APP_BASE_HREF, useValue: window.location.pathname }
  ]
};
