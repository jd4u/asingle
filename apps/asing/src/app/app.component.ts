import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootLayoutComponent } from '@irmbs/ui-root-layout';

@Component({
  standalone: true,
  imports: [RouterModule, RootLayoutComponent],
  selector: 'asingle-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'asing';
}
