import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalProgressBarComponent } from './horizontal-progress-bar.component';

describe('HorizontalProgressBarComponent', () => {
  let component: HorizontalProgressBarComponent;
  let fixture: ComponentFixture<HorizontalProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
