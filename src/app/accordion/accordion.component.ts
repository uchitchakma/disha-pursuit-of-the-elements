import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';


@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, MatIconModule, MdbAccordionModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {


}
