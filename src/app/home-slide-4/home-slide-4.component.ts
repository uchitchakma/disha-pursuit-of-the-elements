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
    const h2Element = document.querySelector('.text-overlay h2');
    h2Element?.classList.add('fade-out');
    setTimeout(() => {
      const dialogRef = this.dialog.open(Slide4SubComponent, {
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
