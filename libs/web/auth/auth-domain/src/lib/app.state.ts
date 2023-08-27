import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppState {
  token = signal<string | null>(null);
  id:string=Date.now().toLocaleString();
  constructor() {
    console.log('AppState Constructor:' + this.id);
    console.trace();
  }

  update(jwt: string | null) {
    if (jwt) {
      this.token.set(jwt);
    } else {
      this.token.set(null);
    }
  }
}
