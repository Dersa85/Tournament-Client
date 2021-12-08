import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangeTotalTimeComponent } from './dialog-change-total-time.component';

describe('DialogChangeTotalTimeComponent', () => {
  let component: DialogChangeTotalTimeComponent;
  let fixture: ComponentFixture<DialogChangeTotalTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChangeTotalTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChangeTotalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
