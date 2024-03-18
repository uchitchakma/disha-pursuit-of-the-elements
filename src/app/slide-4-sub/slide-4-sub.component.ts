import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlideFromBottomDirective } from '../slide-from-bottom.directive';

@Component({
  selector: 'app-slide-4-sub',
  standalone: true,
  imports: [CommonModule, SlideFromBottomDirective],
  templateUrl: './slide-4-sub.component.html',
  styleUrl: './slide-4-sub.component.scss'
})
export class Slide4SubComponent {
  amenities = [
    { name: 'MINI THEATER', iconPath: '../../assets/icons/theater.svg' },
    { name: 'SWIMMING POOL', iconPath: '../../assets/icons/pool.svg' },
    { name: 'SUPER MARKET', iconPath: '../../assets/icons/market.svg' },
    { name: 'KIDS PLAY AREA', iconPath: '../../assets/icons/playarea.svg' },
    { name: 'AMPHITHEATER', iconPath: '../../assets/icons/amphitheater.svg' },
    { name: 'SALON & SPA', iconPath: '../../assets/icons/salon.svg' },
    { name: 'STUDY ROOM', iconPath: '../../assets/icons/study.svg' },
    { name: 'BUSINESS CENTER', iconPath: '../../assets/icons/business.svg' },
    { name: 'GYM', iconPath: '../../assets/icons/gym.svg' },
    { name: 'CAFE', iconPath: '../../assets/icons/cafe.svg' }
  ];
}