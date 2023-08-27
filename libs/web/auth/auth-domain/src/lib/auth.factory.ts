import { JwtLocalStorageService } from './jwt.local.storage';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

let countAuthFactoryCalled = 0;
export const authFactory =
  (storage: JwtLocalStorageService, router: Router, auth: AuthService) =>
  () => {
    let _localuser!: string | null;
    console.log('Inside authFactory:' + countAuthFactoryCalled++);

    storage.getItem().subscribe((token) => {
      _localuser = JSON.parse(token as string) as string | null;
      console.log(_localuser);
      if (_localuser) {
        console.log('_localuser found');
        auth.setToken(_localuser);
      } else {
        console.log('_localuser not found!');
        auth.setToken(null);
        //router.navigate(['/']);
      }
    });
  };
