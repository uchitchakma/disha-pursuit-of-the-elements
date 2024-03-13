import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-home-slide-7',
  standalone: true,
  imports: [CommonModule, MatIconModule, AccordionComponent],
  templateUrl: './home-slide-7.component.html',
  styleUrls: ['./home-slide-7.component.scss'],
})
export class HomeSlide7Component {}
