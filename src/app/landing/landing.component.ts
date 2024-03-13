import {
  Component,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  ViewChild,
  Renderer2,
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollHorizontalDirective } from '../scroll-horizontal.directive';
import { SharedService } from '../shared.service';

// Assuming an index file exists that exports all slide components
import * as SlideComponents from '../home-slides';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ScrollHorizontalDirective,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  currentSlide = 0;
  showPage = true; // Controls the display of the content

  slidesConfig = [
    { component: SlideComponents.HomeSlide1Component },
    { component: SlideComponents.HomeSlide2Component },
    { component: SlideComponents.HomeSlide3Component },
    { component: SlideComponents.HomeSlide4Component },
    { component: SlideComponents.HomeSlide5Component },
    { component: SlideComponents.HomeSlide6Component },
    { component: SlideComponents.HomeSlide7Component },
    { component: SlideComponents.HomeSlide9Component },
    { component: SlideComponents.HomeSlide8Component },
  ];

  @ViewChild('carousel', { read: ViewContainerRef }) carouselContainer!: ViewContainerRef;
  @ViewChild('carousel', { read: ElementRef }) carouselElementRef!: ElementRef;

  private scrollSubscription!: Subscription;
  private removeScrollEventListener!: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private sharedService: SharedService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadSlidesDynamically();
      this.sharedService.scrollToSlideEvent.subscribe((index: number) => {
        this.scrollToSlide(index);
      });

      this.addScrollEventListener();
    }
  }

  loadSlidesDynamically(): void {
    this.slidesConfig.forEach((slideConfig) => {
      const slideContainerEl = this.renderer.createElement('div');
      this.renderer.addClass(slideContainerEl, 'slide');
      const componentRef = this.componentFactoryResolver.resolveComponentFactory(slideConfig.component).create(this.carouselContainer.injector);
      this.renderer.appendChild(slideContainerEl, componentRef.location.nativeElement);
      this.carouselContainer.element.nativeElement.appendChild(slideContainerEl);
    });
  }

  addScrollEventListener(): void {
    const carouselElement = this.carouselElementRef.nativeElement;
    this.removeScrollEventListener = this.renderer.listen(carouselElement, 'scroll', () => {
      const scrollPosition = carouselElement.scrollLeft;
      const slideWidth = carouselElement.querySelector('.slide').clientWidth;
      const newSlideIndex = Math.round(scrollPosition / slideWidth);
      if (newSlideIndex !== this.currentSlide) {
        this.currentSlide = newSlideIndex;
        this.cdr.markForCheck();
      }
    });
}


  scrollToSlide(slideIndex: number): void {
    const slideWidth = this.carouselContainer.element.nativeElement.querySelector('.slide')?.clientWidth || 0;
    const scrollToX = slideWidth * slideIndex;
    this.carouselContainer.element.nativeElement.scroll({
      left: scrollToX,
      behavior: 'smooth',
    });
    this.currentSlide = slideIndex;
    this.cdr.markForCheck();
  }

  togglePage(): void {
    this.showPage = !this.showPage;
    this.toggleScrolling(this.showPage);
  }

  toggleScrolling(enable: boolean): void {
    const body = document.body;
    if (enable) {
      this.renderer.removeClass(body, 'no-horizontal-scroll');
    } else {
      this.renderer.addClass(body, 'no-horizontal-scroll');
    }
  }

  ngOnDestroy(): void {
    if (this.removeScrollEventListener) {
      this.removeScrollEventListener();
    }
}

}
