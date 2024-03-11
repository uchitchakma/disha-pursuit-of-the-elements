import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlide5Component } from './home-slide-5.component';

describe('HomeSlide5Component', () => {
  let component: HomeSlide5Component;
  let fixture: ComponentFixture<HomeSlide5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlide5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSlide5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
