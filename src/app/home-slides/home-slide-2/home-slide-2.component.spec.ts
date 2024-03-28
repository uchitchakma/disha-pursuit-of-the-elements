import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlide2Component } from './home-slide-2.component';

describe('HomeSlide2Component', () => {
  let component: HomeSlide2Component;
  let fixture: ComponentFixture<HomeSlide2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlide2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSlide2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
