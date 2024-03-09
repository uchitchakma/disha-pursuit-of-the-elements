import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollHorizontal]',
  standalone: true
})
export class ScrollHorizontalDirective {
  constructor(private el: ElementRef) {}

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    // Basic attempt to differentiate between trackpad and mouse based on event characteristics
    const isLikelyTrackpad = Math.abs(event.deltaX) > 0 || Math.abs(event.deltaY) < 1;

    if (isLikelyTrackpad) {
      // If it's likely a trackpad, allow default scrolling behavior.
      // Do not preventDefault to allow normal scrolling behavior.
      return;
    } else {
      // For mouse wheel, customize the scrolling behavior.
      event.preventDefault();
      const scrollAmount = event.deltaY * -16; // Custom scrolling for mouse wheel
      this.el.nativeElement.scrollLeft += scrollAmount;
    }
  }
}
