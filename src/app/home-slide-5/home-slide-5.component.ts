import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Slide5SubComponent } from '../slide-5-sub/slide-5-sub.component';

@Component({
  selector: 'app-home-slide-5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-slide-5.component.html',
  styleUrl: './home-slide-5.component.scss'
})
export class HomeSlide5Component {
  listItems = [
    'ENTRY/EXIT',
    'CLUBHOUSE',
    'GRAND GATEWAY / DROP OFF',
    'WELCOME GREENS',
    'MIYAWAKI FOREST',
    'PERFORMANCE PLAZA',
    'REFLEXOLOGY GARDEN',
    'COMMUNITY OPEN SPACE',
    'KIDS PLAY ZONE',
    'SPORTS ZONE',
    'VISITOR PARKING BAY',
    'PODIUM LANDSCAPE',
    'FITNESS PARK',
    'THEMED GARDEN',
    'PERIPHERAL LANDSCAPE',
    'PODIUM VEHICULAR ENTRY',
    'PREMIUM TOWERS',
    'MILLENNIUM TOWER',
    'PRESIDENTIAL TOWERS',
    'VILLAMENTS',
    'BASEMENT RAMP',
    'SURFACE PARKING - 140',
  ];
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const h2Element = document.querySelector('.text-overlay h2');
    h2Element?.classList.add('fade-out');
    setTimeout(() => {
      const dialogRef = this.dialog.open(Slide5SubComponent, {
        maxWidth: '100vw',
        width: '100vw',
        height: '100vh',
        panelClass: 'content-full-screen-modal',
      });
      
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
        // Reset the animations if needed
      });
  }, 500); // Adjust this duration to match the fade-out animation length
}
}
