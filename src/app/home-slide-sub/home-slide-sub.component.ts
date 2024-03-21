import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { SlideFromBottomDirective } from '../slide-from-bottom.directive';

@Component({
  selector: 'app-home-slide-sub',
  standalone: true,
  imports: [MatIconModule, CommonModule, SlideFromBottomDirective ],
  templateUrl: './home-slide-sub.component.html',
  styleUrl: './home-slide-sub.component.scss'
})
export class HomeSlideSubComponent {
  constructor(public dialogRef: MatDialogRef<HomeSlideSubComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}