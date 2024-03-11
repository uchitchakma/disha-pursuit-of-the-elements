// animations.ts
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [ // :enter is alias for 'void => *'
    style({ opacity: 0 }),
    animate('1s ease-in-out', style({ opacity: 1 })),
  ]),
]);

  
  export const fadeOutAnimation = trigger('fadeOutAnimation', [
    transition(':leave', [ // :leave is alias for '* => void'
      animate('1000ms ease-out', style({ opacity: 0 })),
    ]),
  ]);
  
  export const toggleHeightAnimation = trigger('toggleHeight', [
    transition(':enter', [
      style({ height: 0, opacity: 0 }),
      animate('600ms ease-out', style({ height: '*', opacity: 1 })),
    ]),
    transition(':leave', [
      style({ height: '*', opacity: 1 }),
      animate('600ms ease-out', style({ height: 0, opacity: 0 })),
    ]),
  ]);