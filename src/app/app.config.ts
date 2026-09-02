import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection
} from '@angular/core';

import {
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';

import { routes } from './app.routes';

import {
  provideHttpClient,
  withFetch
} from '@angular/common/http';

import {
  NgcCookieConsentConfig,
  NgcCookieConsentModule
} from 'ngx-cookieconsent';

import { CookieService } from 'ngx-cookie-service';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'bernardinoantonio.ao',
    secure: true,
  },

  position: 'bottom-left',

  theme: 'classic',

  palette: {
    popup: {
      background: '#fff',
      text: '#272727',
      link: '#012933EB'
    },

    button: {
      background: '#012933EB', 
      text: '#fff',
      border: '5px'
    }
  },

  type: 'opt-in',

  content: {
    message: 'Usamos cookies para melhorar sua experiência, analisar tráfego e exibir anúncios. Você pode alterar suas preferências a qualquer momento.',
    dismiss: 'Aceitar',
    deny: 'Recusar',
    link: 'Saiba mais',
    href: '/politica-de-privacidade',
    policy: '<i class="fa fa-cookie"></i>'
  },

  compliance: {
    optin: 'button button-primary',
    optout: 'button button-secondary'
  },

  autoOpen: true
};

export const appConfig: ApplicationConfig = {
  providers: [

    provideZoneChangeDetection({
      eventCoalescing: true
    }),

    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),

    provideHttpClient(
      withFetch()
    ),

    importProvidersFrom(
      NgcCookieConsentModule.forRoot(cookieConfig)
    ),

    CookieService
  ]
};