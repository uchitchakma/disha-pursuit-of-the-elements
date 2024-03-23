import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollHorizontalDirective } from '../scroll-horizontal.directive';
import { SharedService } from '../shared.service';
import { HomeSlide1Component } from '../home-slides';
import { HomeSlide2Component } from '../home-slides';
import { HomeSlide3Component } from '../home-slides';
import { HomeSlide4Component } from '../home-slides';
import { HomeSlide5Component } from '../home-slides';
import { HomeSlide6Component } from '../home-slides';
import { HomeSlide7Component } from '../home-slides';
import { HomeSlide8Component } from '../home-slides';
import { HomeSlide9Component } from '../home-slides';
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