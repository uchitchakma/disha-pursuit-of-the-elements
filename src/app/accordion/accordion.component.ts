import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  showPage = true; // Controls the display of the content
  showInfo: string | null = null;
  
  toggleInfo(category: string): void {
    this.showInfo = this.showInfo === category ? null : category;
  }

}
