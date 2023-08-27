import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@irmbs/web/auth/domain';

@Component({
  selector: 'asingle-root-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.css'],
})
export class RootLayoutComponent {
  constructor(
    protected service: AuthService,
    protected route: ActivatedRoute,
    protected router: Router,
  ) {}
}
