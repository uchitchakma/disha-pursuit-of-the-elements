import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide4SubComponent } from './slide-4-sub.component';

describe('Slide4SubComponent', () => {
  let component: Slide4SubComponent;
  let fixture: ComponentFixture<Slide4SubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slide4SubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Slide4SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
