import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeSlideSubComponent } from '../home-slide-sub/home-slide-sub.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-slide-2',
  standalone: true,
  templateUrl: './home-slide-2.component.html',
  styleUrls: ['./home-slide-2.component.scss']
})
export class HomeSlide2Component {
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
      dialogHeight = 'calc(100vh - 230px)';
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

    // Wait for the fade-out animation to complete
    setTimeout(() => {
      const h2Element = document.querySelector('.text-overlay h2');
      h2Element?.classList.add('move-down');

      // Wait for the move-down animation to complete before opening the dialog
      setTimeout(() => {
        const dialogRef = this.dialog.open(HomeSlideSubComponent, dialogConfig);

        // Handle dialog closure
        dialogRef.afterClosed().subscribe(() => {
          console.log('The dialog was closed');
          // Optionally reset the animations
        });
      }, 700); // Adjust this duration to match the h2 move-down animation duration
    }, 500); // Adjust this duration to match the paragraph fade-out animation duration
  }
}