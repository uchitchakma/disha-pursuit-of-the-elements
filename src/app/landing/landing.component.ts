import {
  Component,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollHorizontalDirective } from '../scroll-horizontal.directive';
import { HomeSlide1Component } from '../home-slides';
import { HomeSlide2Component } from '../home-slides';
import { HomeSlide3Component } from '../home-slides';
import { HomeSlide4Component } from '../home-slides';
import { HomeSlide5Component } from '../home-slides';
import { HomeSlide6Component } from '../home-slides';
import { HomeSlide7Component } from '../home-slides';
import { HomeSlide8Component } from '../home-slides';
import { HomeSlide9Component } from '../home-slides';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ScrollHorizontalDirective,
    HomeSlide1Component,
    HomeSlide2Component,
    HomeSlide3Component,
    HomeSlide4Component,
    HomeSlide5Component,
    HomeSlide6Component,
    HomeSlide7Component,
    HomeSlide8Component,
    HomeSlide9Component
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
}
