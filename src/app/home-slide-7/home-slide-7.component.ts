import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-slide-7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-slide-7.component.html',
  styleUrls: ['./home-slide-7.component.scss'],
})
export class HomeSlide7Component implements OnInit {
  mapUrl: SafeResourceUrl = null!;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const googleMapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.118438992035!2d77.59733950066084!3d13.031900855614982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1794384b1565%3A0x366fd799c1ef419a!2sHebbal%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1710135934003!5m2!1sen!2sin'; // Replace with your Google Maps embed URL
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(googleMapsEmbedUrl);
    }
  }
}
