import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollHorizontalDirective } from '../scroll-horizontal.directive';
import { SharedService } from '../shared.service';
import { HomeSlide1Component } from '../home-slides/home-slide-1/home-slide-1.component';
import { HomeSlide2Component } from '../home-slides/home-slide-2/home-slide-2.component';
import { HomeSlide3Component } from '../home-slides/home-slide-3/home-slide-3.component';
import { HomeSlide4Component } from '../home-slides/home-slide-4/home-slide-4.component';
import { HomeSlide5Component } from '../home-slides/home-slide-5/home-slide-5.component';
import { HomeSlide6Component } from '../home-slides/home-slide-6/home-slide-6.component';
import { HomeSlide7Component } from '../home-slides/home-slide-7/home-slide-7.component';
import { HomeSlide8Component } from '../home-slides/home-slide-8/home-slide-8.component';
import { HomeSlide9Component } from '../home-slides/home-slide-9/home-slide-9.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
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
    HomeSlide9Component,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @ViewChild('carousel') carousel!: ElementRef;
  slides = Array(9).fill(0).map((x, i) => i); // Representing your 9 slides
  activeSlideIndex = 0;

  constructor(private cdr: ChangeDetectorRef, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.scrollToSlideEvent.subscribe((index: number) => {
      this.goToSlide(index);
    });
  }
  scrollTo(direction: 'prev' | 'next'): void {
    const carouselElement = this.carousel.nativeElement;
    const slides = carouselElement.querySelectorAll('.slide');

    if (direction === 'next' && this.activeSlideIndex < slides.length - 1) {
      this.activeSlideIndex++;
    } else if (direction === 'prev' && this.activeSlideIndex > 0) {
      this.activeSlideIndex--;
    }

    this.goToSlide(this.activeSlideIndex);
  }

  onScroll(): void {
    const carouselElement = this.carousel.nativeElement;
    const scrollPosition = carouselElement.scrollLeft + carouselElement.offsetWidth / 2; // Center point for more accurate index
    const slides = carouselElement.querySelectorAll('.slide');
    
    let cumulativeWidth = 0;
    for (let i = 0; i < slides.length; i++) {
      cumulativeWidth += slides[i].offsetWidth;
      if (cumulativeWidth >= scrollPosition) {
        this.activeSlideIndex = i;
        break;
      }
    }
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  goToSlide(slideIndex: number): void {
    this.activeSlideIndex = slideIndex;
    const carouselElement = this.carousel.nativeElement;
    const slides = carouselElement.querySelectorAll('.slide');
    let targetPosition = 0;
    for (let i = 0; i < slideIndex; i++) {
      targetPosition += slides[i].offsetWidth;
    }
    carouselElement.scrollLeft = targetPosition;
    this.cdr.detectChanges(); // Update after manual scroll too
  }
  isSpecialSlide(index: number): boolean {
    return index === 1 || index === 2; // Special color for slides 2 and 3
  }
}