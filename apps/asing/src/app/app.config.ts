import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import {
  Router,
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import {APP_AUTH_SIGNAL, APP_LOCAL_STORAGE, AuthService, JwtLocalStorageService, authFactory} from '@irmbs/web/auth/domain';

const appTokenProviders = [
  { provide: APP_AUTH_SIGNAL, useClass: AuthService},
  { provide: APP_LOCAL_STORAGE, useClass: JwtLocalStorageService},
];

const appInitializers = [
  {
    provide: APP_INITIALIZER,
    useFactory: authFactory,
    multi: true,
    deps: [APP_LOCAL_STORAGE, Router, APP_AUTH_SIGNAL],
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    appTokenProviders,
    // provideHttpClient(
    //   withInterceptors([errorInterceptor, apiInterceptor, tokenInterceptor]),
    // ),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    //provideAnimations(),
    //!environment.production ? provideStoreDevtools() : [],
    appInitializers,
  ],
};
