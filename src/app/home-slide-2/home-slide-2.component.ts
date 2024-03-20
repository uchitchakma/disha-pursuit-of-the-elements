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

    // Configure dialog settings for mobile and PCs
    const dialogConfig = {
      maxWidth: '100vw',
      width: '100vw',
      height: isMobile ? '90vh' : 'calc(100vh - 230px)', // Mobile: 80vh, PC: calc(100vh - 230px)
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
        const dialogRef = this.dialog.open(HomeSlideSubComponent, dialogConfig);

        // Handle dialog closure
        dialogRef.afterClosed().subscribe(() => {
          console.log('The dialog was closed');
        });
      }, 700); // Adjust based on h2 move-down animation duration
    }, 500); // Adjust based on paragraph fade-out animation duration
  }
}