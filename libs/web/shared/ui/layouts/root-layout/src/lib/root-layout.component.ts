import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_AUTH_SIGNAL, AuthService } from '@irmbs/web/auth/domain';

@Component({
  selector: 'asingle-root-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.css'],
})
export class RootLayoutComponent {
  constructor(
    @Inject(APP_AUTH_SIGNAL) protected service: AuthService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {
    console.log(
      'RootLayoutComponent Constructor: AuthService.id:' + service.id
    );
  }
}
