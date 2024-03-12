import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Required for *ngIf, *ngFor, etc.
    RouterOutlet, // Required for routing
    HeaderComponent, // Your custom header component
    FooterComponent,
    MatIconModule, // Material icons
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Note the 's' in styleUrls to indicate it's an array
})
export class AppComponent {
  title = 'disha-pursuit-of-the-elements';
}
