import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SlideFromBottomDirective } from '../slide-from-bottom.directive';

@Component({
  selector: 'app-home-slide-sub',
  standalone: true,
  imports: [MatIconModule, CommonModule , HeaderComponent ,FooterComponent, SlideFromBottomDirective ],
  templateUrl: './home-slide-sub.component.html',
  styleUrl: './home-slide-sub.component.scss'
})
export class HomeSlideSubComponent {
  

}