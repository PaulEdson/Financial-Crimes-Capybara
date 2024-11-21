import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'
import {provideAnimations} from '@angular/platform-browser/animations'
import { routes } from './app.routes';
//import {MatSidenavModule} from '@angular/material/sidenav';
//import { MatSlideToggle } from '@angular/material/slide-toggle';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideAnimations()]
};
