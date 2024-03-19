import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide5SubComponent } from './slide-5-sub.component';

describe('Slide5SubComponent', () => {
  let component: Slide5SubComponent;
  let fixture: ComponentFixture<Slide5SubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slide5SubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Slide5SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
