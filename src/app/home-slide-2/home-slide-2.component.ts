import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeSlideSubComponent } from '../home-slide-sub/home-slide-sub.component';

@Component({
  selector: 'app-home-slide-2',
  standalone: true,
  templateUrl: './home-slide-2.component.html',
  styleUrls: ['./home-slide-2.component.scss']
})
export class HomeSlide2Component {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const isMobile = window.innerWidth < 768; // Example mobile breakpoint
    const isMonitor = window.innerHeight > 1000; // Example laptop condition

    let dialogHeight = 'calc(100vh - 102px)'; // Default for desktop
    let dialogTop = '102px'; // Default for desktop

    if (isMobile) {
      dialogHeight = '90vh';
      dialogTop = '75px';
    } else if (isMonitor) {
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

    const paragraphs = document.querySelectorAll('.text-overlay p');
    paragraphs.forEach(paragraph => paragraph.classList.add('fade-out'));

    setTimeout(() => {
      const h2Element = document.querySelector('.text-overlay h2');
      h2Element?.classList.add('move-down');

      setTimeout(() => {
        const dialogRef = this.dialog.open(HomeSlideSubComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(() => {
          paragraphs.forEach(paragraph => paragraph.classList.remove('fade-out'));
          const h2Element = document.querySelector('.text-overlay h2');
          h2Element?.classList.remove('move-down');
        });
      }, 700);
    }, 500);
  }
}
