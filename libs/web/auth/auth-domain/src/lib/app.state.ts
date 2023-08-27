import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppState {
  token = signal<string | null>(null);

  constructor() {
    console.log('AppState Constructor:' + Date.now().toLocaleString());
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
