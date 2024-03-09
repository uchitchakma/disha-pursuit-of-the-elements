// landing.component.ts
import { Component, Inject, PLATFORM_ID, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollHorizontalDirective } from '../scroll-horizontal.directive'; // Ensure the path is correct.

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, CommonModule, ScrollHorizontalDirective], // Import RouterModule, CommonModule, and ScrollHorizontalDirective.
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
    }
  }

  setupScrollListener(): void {
    const carouselElement = this.carousel.nativeElement;
    const indicators = document.querySelectorAll('.indicator');

    carouselElement.addEventListener('scroll', () => {
      // Assuming each slide is full-width, adjust if your design is different
      const slideWidth = carouselElement.querySelector('.slide')?.clientWidth || 0;
      const scrollLeft = carouselElement.scrollLeft;
      const index = Math.round(scrollLeft / slideWidth);

      // Update active indicator
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    });
  }
}