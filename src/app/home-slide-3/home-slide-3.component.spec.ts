import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlide3Component } from './home-slide-3.component';

describe('HomeSlide3Component', () => {
  let component: HomeSlide3Component;
  let fixture: ComponentFixture<HomeSlide3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlide3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSlide3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
