import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide5TowerComponent } from './slide-5-tower.component';

describe('Slide5TowerComponent', () => {
  let component: Slide5TowerComponent;
  let fixture: ComponentFixture<Slide5TowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slide5TowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Slide5TowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
