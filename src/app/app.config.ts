import { ApplicationConfig, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core'; // <--- Importa esto
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), 
    
    provideRouter(routes),
    provideHttpClient(),

    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'es'
      })
    ),

    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    })
  ]
};