import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlide9Component } from './home-slide-9.component';

describe('HomeSlide9Component', () => {
  let component: HomeSlide9Component;
  let fixture: ComponentFixture<HomeSlide9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlide9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSlide9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
