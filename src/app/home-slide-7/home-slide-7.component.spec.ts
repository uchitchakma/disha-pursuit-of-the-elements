import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlide7Component } from './home-slide-7.component';

describe('HomeSlide7Component', () => {
  let component: HomeSlide7Component;
  let fixture: ComponentFixture<HomeSlide7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlide7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSlide7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
