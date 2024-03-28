import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Slide4SubComponent } from '../../slide-4-sub/slide-4-sub.component';

@Component({
  selector: 'app-home-slide-4',
  standalone: true,
  imports: [],
  templateUrl: './home-slide-4.component.html',
  styleUrls: ['./home-slide-4.component.scss'], // Note the correction here from 'styleUrl' to 'styleUrls'
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeSlide4Component {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    // Directly target the h2 element within .content4 for the fade-out effect
    const h2Element = document.querySelector('.content4 .text-overlay h2');
    
    if (h2Element) {
      h2Element.classList.add('fade-out');
      
      // Wait for the fade-out animation to complete before opening the dialog
      setTimeout(() => {
        const dialogRef = this.dialog.open(Slide4SubComponent, this.getDialogConfig());
  
        dialogRef.afterClosed().subscribe(() => {
          // Once the dialog is closed, remove the fade-out class to make h2 reappear
          h2Element.classList.remove('fade-out');
        });
      }, 500); // This timeout should match the duration of your fade-out animation
    }
  }

  private getDialogConfig(): any {
    const isMobile = window.innerWidth < 500;
    const isMonitor = window.innerHeight > 1000;
    let dialogHeight = 'calc(100vh - 102px)';
    let dialogTop = '102px';
  
    if (isMobile) {
      dialogHeight = '90vh';
      dialogTop = '75px';
    } else if (isMonitor) {
      dialogHeight = '92vh';
      dialogTop = '102px';
    }
  
    return {
      maxWidth: '100vw',
      width: '100vw',
      height: dialogHeight,
      position: { top: dialogTop },
      panelClass: 'content-full-screen-modal',
    };
  }
}
