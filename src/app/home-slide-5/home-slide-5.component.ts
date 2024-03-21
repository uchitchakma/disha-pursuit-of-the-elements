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
    // Determine if the device is mobile based on the window's inner width
    const isMobile = window.innerWidth < 768; // Example mobile breakpoint
    const isMonitor = window.innerHeight > 1000; // Example laptop condition

    // Configure dialog settings based on the device
    let dialogHeight = 'calc(100vh - 150px)'; // Default for desktop
    let dialogTop = '180px'; // Default for desktop

    if (isMobile) {
      // Mobile configuration
      dialogHeight = '90vh';
      dialogTop = '97px';
    } else if (isMonitor) {
      // Laptop configuration
      dialogHeight = 'calc(100vh - 180px)';
      dialogTop = '180px';
    }


    const dialogConfig = {
      maxWidth: '100vw',
      width: '100vw',
      height: dialogHeight,
      position: { top: dialogTop },
      panelClass: 'content-full-screen-modal',
    };

    // Fade-out effect for paragraphs
    const paragraphs = document.querySelectorAll('.text-overlay p');
    paragraphs.forEach(paragraph => paragraph.classList.add('fade-out'));

    setTimeout(() => {
      const h2Element = document.querySelector('.text-overlay h2');
      h2Element?.classList.add('move-down');

      setTimeout(() => {
        // Open the dialog with the configured settings
        const dialogRef = this.dialog.open(Slide5SubComponent, dialogConfig);

        // Handle dialog closure
        dialogRef.afterClosed().subscribe(() => {
          console.log('The dialog was closed');
        });
      }, 700); // Adjust based on h2 move-down animation duration
    }, 500); // Adjust based on paragraph fade-out animation duration
  }
}