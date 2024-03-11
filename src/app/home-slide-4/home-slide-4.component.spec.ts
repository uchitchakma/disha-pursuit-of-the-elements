import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlide4Component } from './home-slide-4.component';

describe('HomeSlide4Component', () => {
  let component: HomeSlide4Component;
  let fixture: ComponentFixture<HomeSlide4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlide4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSlide4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
