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
    // Assuming .home-slide-2 is a unique class surrounding the component's template
    const paragraphs = document.querySelectorAll('.content2 .text-overlay p');
    paragraphs.forEach(paragraph => paragraph.classList.add('fade-out'));
  
    setTimeout(() => {
      const h2Element = document.querySelector('.content2 .text-overlay h2');
      h2Element?.classList.add('move-down');
  
      setTimeout(() => {
        const dialogRef = this.dialog.open(HomeSlideSubComponent, this.getDialogConfig());
  
        dialogRef.afterClosed().subscribe(() => {
          paragraphs.forEach(paragraph => paragraph.classList.remove('fade-out'));
          h2Element?.classList.remove('move-down');
        });
      }, 700); // Adjust based on h2 move-down animation duration
    }, 500); // Adjust based on paragraph fade-out animation duration
  }
  
  private getDialogConfig(): any {
    // This method abstracts the dialog configuration to reduce duplication
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