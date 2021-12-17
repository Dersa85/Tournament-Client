import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakTimeControlComponent } from './break-time-control.component';

describe('BreakTimeControlComponent', () => {
  let component: BreakTimeControlComponent;
  let fixture: ComponentFixture<BreakTimeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakTimeControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakTimeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
