import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Slide4SubComponent } from '../slide-4-sub/slide-4-sub.component';

@Component({
  selector: 'app-home-slide-4',
  standalone: true,
  imports: [],
  templateUrl: './home-slide-4.component.html',
  styleUrl: './home-slide-4.component.scss'
})
export class HomeSlide4Component {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    // Determine if the device is mobile based on the window's inner width
    const isMobile = window.innerWidth < 768; // Example mobile breakpoint

    // Configure dialog settings for mobile and PCs
    const dialogConfig = {
      maxWidth: '100vw',
      width: '100vw',
      height: isMobile ? 'calc(100vh - 160px)' : 'calc(100vh - 230px)', // Mobile: 80vh, PC: calc(100vh - 230px)
      position: { top: isMobile ? '97px' : '180px' }, // Mobile: 100px from the top, PC: 180px from the top
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
        const dialogRef = this.dialog.open(Slide4SubComponent, dialogConfig);

        // Handle dialog closure
        dialogRef.afterClosed().subscribe(() => {
          console.log('The dialog was closed');
        });
      }, 700); // Adjust based on h2 move-down animation duration
    }, 500); // Adjust based on paragraph fade-out animation duration
  }
}