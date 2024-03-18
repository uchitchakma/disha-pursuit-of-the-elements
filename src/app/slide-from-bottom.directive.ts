import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';
import { animate, AnimationBuilder, AnimationMetadata, style } from '@angular/animations';

@Directive({
  selector: '[appSlideFromBottom]',
  standalone: true
})
export class SlideFromBottomDirective implements OnInit {

  constructor(private el: ElementRef, private builder: AnimationBuilder) {}

  ngOnInit() {
    this.playSlideFromBottomAnimation();
  }

  playSlideFromBottomAnimation() {
    const metadata: AnimationMetadata[] = [
      style({ transform: 'translateY(100%)', opacity: 0 }),
      animate('0.8s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
    ];

    const factory = this.builder.build(metadata);
    const player = factory.create(this.el.nativeElement);
    player.play();
  }
}

