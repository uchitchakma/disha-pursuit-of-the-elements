import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SlideFromBottomDirective } from '../slide-from-bottom.directive';
import { Slide5TowerComponent } from '../slide-5-tower/slide-5-tower.component';

@Component({
  selector: 'app-slide-5-sub',
  standalone: true,
  imports: [CommonModule, SlideFromBottomDirective,  MatIconModule],
  templateUrl: './slide-5-sub.component.html',
  styleUrls: ['./slide-5-sub.component.scss'] // Corrected property name from 'styleUrl' to 'styleUrls'
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

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<Slide5SubComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  openDialog(slideIndex: number): void {
    const isMobile = window.innerWidth < 768; // Example mobile breakpoint
    const isMonitor = window.innerHeight > 1000; // Example laptop condition

    // Configure dialog settings based on the device
    let dialogHeight = 'calc(100vh - 85px)'; // Default for desktop
    let dialogTop = '102px'; // Default for desktop

    if (isMobile) {
      // Mobile configuration
      dialogHeight = '90vh';
      dialogTop = '75px';
    } else if (isMonitor) {
      // Laptop configuration
      dialogHeight = '94vh';
      dialogTop = '102px';
    }
    // Initiating the fade-out effect
    const h2Element = document.querySelector('.text-overlay h2');
    h2Element?.classList.add('fade-out');

    setTimeout(() => {
      // Opening the dialog with specified configuration inline
      const dialogRef = this.dialog.open(Slide5TowerComponent, {
        maxWidth: '100vw',
      width: '100vw',
      height: dialogHeight,
      position: { top: dialogTop }, // Specified position
        panelClass: 'content-full-screen-modal',
        data: { slideIndex } // Passing data to the dialog component
      });

      // Handle the dialog closure with a subscription to the afterClosed observable
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
        // Actions after the dialog is closed
      });
    }, 500); // Delay to match the fade-out effect's duration
  }
}