import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveLeadStatusComponent } from './active-lead-status.component';

describe('ActiveLeadStatusComponent', () => {
  let component: ActiveLeadStatusComponent;
  let fixture: ComponentFixture<ActiveLeadStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveLeadStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveLeadStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
