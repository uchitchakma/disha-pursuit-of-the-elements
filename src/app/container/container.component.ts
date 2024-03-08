import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  activePage = 0;
  indicators = [0, 1]; // Update based on the number of components

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.pageYOffset;
    this.activePage = Math.round(scrollPosition / window.innerHeight);
  }

  scrollToComponent(index: number): void {
    this.activePage = index;
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  }
}
