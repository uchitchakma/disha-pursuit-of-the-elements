import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDpeComponent } from './about-dpe.component';

describe('AboutDpeComponent', () => {
  let component: AboutDpeComponent;
  let fixture: ComponentFixture<AboutDpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDpeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutDpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
