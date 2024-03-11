import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlide6Component } from './home-slide-6.component';

describe('HomeSlide6Component', () => {
  let component: HomeSlide6Component;
  let fixture: ComponentFixture<HomeSlide6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlide6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSlide6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
