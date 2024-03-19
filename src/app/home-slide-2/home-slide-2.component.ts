import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeSlideSubComponent } from '../home-slide-sub/home-slide-sub.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-slide-2',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './home-slide-2.component.html',
  styleUrls: ['./home-slide-2.component.scss']
})
export class HomeSlide2Component {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    // Start fading out the paragraphs immediately
    const paragraphs = document.querySelectorAll('.text-overlay p');
    paragraphs.forEach(paragraph => paragraph.classList.add('fade-out'));

    // Wait for the fade-out animation to complete
    setTimeout(() => {
      // Move the h2 tag down after paragraphs have faded
      const h2Element = document.querySelector('.text-overlay h2');
      h2Element?.classList.add('move-down');

      // Open the dialog after the h2 has moved
      setTimeout(() => {
        const dialogRef = this.dialog.open(HomeSlideSubComponent, {
          maxWidth: '100vw',
          width: '100vw',
          height: 'calc(100vh - 230px)',
          position: { top: '180px' },
          panelClass: 'content-full-screen-modal',
        });

        dialogRef.afterClosed().subscribe(() => {
          console.log('The dialog was closed');
          // Reset the animations if needed
        });
      }, 700); // Adjust this duration to match the time it takes for h2 to move down
    }, 500); // Adjust this duration to match the fade-out animation length
  }
}
