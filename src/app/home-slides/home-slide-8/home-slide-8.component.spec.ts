import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlide8Component } from './home-slide-8.component';

describe('HomeSlide8Component', () => {
  let component: HomeSlide8Component;
  let fixture: ComponentFixture<HomeSlide8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlide8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSlide8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
