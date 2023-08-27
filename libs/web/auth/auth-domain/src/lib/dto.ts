import { InjectionToken } from "@angular/core";
import { AuthService } from "./auth.service";

export interface Authenticate{
  email:string;
  pass:string;
}

export interface User{
  email: string
  role: string
}


export const APP_INITIALIZER = new InjectionToken<string>('APP_INITIALIZER');

export const APP_AUTH_SIGNAL = new InjectionToken<string>('APP_AUTH_SIGNAL');
export const APP_LOCAL_STORAGE = new InjectionToken<string>('APP_LOCAL_STORAGE');

