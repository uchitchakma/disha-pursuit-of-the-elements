import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlide1Component } from './home-slide-1.component';

describe('HomeSlide1Component', () => {
  let component: HomeSlide1Component;
  let fixture: ComponentFixture<HomeSlide1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlide1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSlide1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
