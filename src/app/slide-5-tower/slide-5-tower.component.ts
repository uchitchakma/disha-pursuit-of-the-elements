import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollHorizontalDirective } from '../scroll-horizontal.directive';
import { SlideFromBottomDirective } from '../slide-from-bottom.directive';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core'; // Correct import for Inject


@Component({
  selector: 'app-slide-5-tower',
  standalone: true,
  imports: [CommonModule,
            ScrollHorizontalDirective,
            SlideFromBottomDirective,
            MatIconModule],
  templateUrl: './slide-5-tower.component.html',
  styleUrl: './slide-5-tower.component.scss'
})
export class Slide5TowerComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;
  slides = Array(4).fill(0).map((x, i) => i); // Representing your 4 slides
  activeSlideIndex = 0;

  constructor(public dialogRef: MatDialogRef<Slide5TowerComponent>,private cdr: ChangeDetectorRef, 
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    closeDialog(): void {
      this.dialogRef.close(true);
    }


  ngOnInit(): void {

    if (this.data?.slideIndex !== undefined) {
      this.goToSlide(this.data.slideIndex);
    }
  }
  ngAfterViewInit(): void {
    // Ensure the carousel is correctly positioned after the view initializes
    if (this.data?.slideIndex !== undefined) {
      setTimeout(() => this.goToSlide(this.data.slideIndex), 0);
    }
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