import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Slide5SubComponent } from '../slide-5-sub/slide-5-sub.component';

@Component({
  selector: 'app-home-slide-5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-slide-5.component.html',
  styleUrls: ['./home-slide-5.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
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
    // Directly target the h2 element within .content4 for the fade-out effect
    const h2Element = document.querySelector('.content5 h2');
    
    if (h2Element) {
      h2Element.classList.add('fade-out');
      
      // Wait for the fade-out animation to complete before opening the dialog
      setTimeout(() => {
        const dialogRef = this.dialog.open(Slide5SubComponent, this.getDialogConfig());
  
        dialogRef.afterClosed().subscribe(() => {
          // Once the dialog is closed, remove the fade-out class to make h2 reappear
          h2Element.classList.remove('fade-out');
        });
      }, 500); // This timeout should match the duration of your fade-out animation
    }
  }

  private getDialogConfig(): any {
    const isMobile = window.innerWidth < 768;
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
