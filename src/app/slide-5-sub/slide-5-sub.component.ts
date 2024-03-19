import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SlideFromBottomDirective } from '../slide-from-bottom.directive';
import { Slide5TowerComponent } from '../slide-5-tower/slide-5-tower.component';

@Component({
  selector: 'app-slide-5-sub',
  standalone: true,
  imports: [CommonModule, SlideFromBottomDirective ],
  templateUrl: './slide-5-sub.component.html',
  styleUrl: './slide-5-sub.component.scss'
})
export class Slide5SubComponent {
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

  openDialog(slideIndex: number): void {
    const h2Element = document.querySelector('.text-overlay h2');
    h2Element?.classList.add('fade-out');
    setTimeout(() => {
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.maxWidth = '100vw';
      dialogConfig.width = '100vw';
      dialogConfig.height = '100vh';
      dialogConfig.panelClass = 'content-full-screen-modal';
      dialogConfig.data = { slideIndex }; // Pass the slide index to the dialog
  
      const dialogRef = this.dialog.open(Slide5TowerComponent, dialogConfig);
      
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
        // Reset the animations if needed
      });
    }, 500); // Adjust this duration to match the fade-out animation length
  }
}
