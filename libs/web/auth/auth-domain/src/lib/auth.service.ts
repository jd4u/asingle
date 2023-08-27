import { Injectable, effect, inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtLocalStorageService } from './jwt.local.storage';
import { AppState } from './app.state';
import { Authenticate, User } from './dto';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private storage: JwtLocalStorageService) {
    console.log('AuthService Constructor:' + Date.now().toLocaleString());
    console.trace();
  }

  app: AppState = inject(AppState);
  user = signal<User | null>(null);

  tokenChanged = effect(() => {
    if (this.app.token() != null) {
      console.log('Auth token changed');
      this.getUser().subscribe((U) => this.user.set(U));
    }
  });

  public setToken(jwt: string | null): Observable<boolean> {
    console.log('AuthService setToken');
    this.app.update(jwt);
    return of(true);
  }

  login(authenticate: Authenticate): Observable<string | null> {
    return of(null);
  }

  getUser() {
    return of(null);
  }
}
