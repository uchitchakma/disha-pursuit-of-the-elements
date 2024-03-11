// landing.component.ts
import {
  Component,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollHorizontalDirective } from '../scroll-horizontal.directive'; // Ensure the path is correct.
import { fadeInAnimation, fadeOutAnimation } from '../animations'; // Make sure the path is correct
import { HomeSlide1Component } from '../home-slide-1/home-slide-1.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HomeSlide2Component } from '../home-slide-2/home-slide-2.component';
import { HomeSlide3Component } from '../home-slide-3/home-slide-3.component';
import { HomeSlide4Component } from '../home-slide-4/home-slide-4.component';
import { HomeSlide5Component } from '../home-slide-5/home-slide-5.component';
import { HomeSlide6Component } from '../home-slide-6/home-slide-6.component';
import { HomeSlide7Component } from '../home-slide-7/home-slide-7.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HomeSlide1Component,
    HomeSlide2Component,
    HomeSlide3Component,
    HomeSlide4Component,
    HomeSlide5Component,
    HomeSlide6Component,
    HomeSlide7Component,
    RouterModule,
    CommonModule,
    ScrollHorizontalDirective,
  ], // Import RouterModule, CommonModule, and ScrollHorizontalDirective.
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation], // Add animations here
})
export class LandingComponent implements AfterViewInit {
  slides: number[] = []; // Initialize with the number of slides you have
  currentSlide = 0; // The index of the current active slide
  showPage = true; // Controls the display of the content
  showInfo: string | null = null;
  mapUrl: SafeResourceUrl;

  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {
    // Here, you initialize the mapUrl with the Google Maps iframe URL
    // Replace 'YOUR_GOOGLE_MAPS_EMBED_URL' with your actual embed URL from Google Maps
    const googleMapsEmbedUrl =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.118438992035!2d77.59733950066084!3d13.031900855614982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1794384b1565%3A0x366fd799c1ef419a!2sHebbal%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1710135934003!5m2!1sen!2sin';
    this.mapUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(googleMapsEmbedUrl);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
      this.initializeSlides(); // You need to write this method
    }
  }

  toggleScrolling(enable: boolean): void {
    const body = document.body;
    if (enable) {
      this.renderer.removeClass(body, 'no-horizontal-scroll');
    } else {
      this.renderer.addClass(body, 'no-horizontal-scroll');
    }
  }
  setupScrollListener(): void {
    const carouselElement = this.carousel.nativeElement;
    const indicators = document.querySelectorAll('.indicator');
    

    carouselElement.addEventListener('scroll', () => {
      // Assuming each slide is full-width, adjust if your design is different
      const slideWidth =
        carouselElement.querySelector('.slide')?.clientWidth || 0;
      const scrollLeft = carouselElement.scrollLeft;
      const index = Math.round(scrollLeft / slideWidth);

      // Update active indicator
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
      this.currentSlide = index;
    });
  }
  scrollToSlide(slideIndex: number): void {
    const carouselElement = this.carousel.nativeElement;
    const slideWidth = carouselElement.querySelector('.slide')?.clientWidth || 0;
    const scrollToX = slideWidth * slideIndex;
    carouselElement.scroll({
      left: scrollToX,
      behavior: 'smooth' // This will make the scrolling smooth
    });
  }
  initializeSlides(): void {
    // Suppose you have 5 slides, you can initialize them like this:
    this.slides = Array.from({ length: 8 }, (_, i) => i);
    // If the number of slides can change dynamically, 
    // you could base this on the content loaded, etc.
  }
  indicatorActiveColors: string[] = ['#1f1c1c', '#ffffff', '#ffffff', '#1f1c1c', '#1f1c1c', '#1f1c1c', '#1f1c1c', '#1f1c1c'];

  togglePage(): void {
    this.showPage = !this.showPage;
    this.toggleScrolling(this.showPage);
  }
  toggleInfo(category: string): void {
    this.showInfo = this.showInfo === category ? null : category;
  }
}
