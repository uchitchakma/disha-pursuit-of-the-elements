import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlideSubComponent } from './home-slide-sub.component';

describe('HomeSlideSubComponent', () => {
  let component: HomeSlideSubComponent;
  let fixture: ComponentFixture<HomeSlideSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlideSubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSlideSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
