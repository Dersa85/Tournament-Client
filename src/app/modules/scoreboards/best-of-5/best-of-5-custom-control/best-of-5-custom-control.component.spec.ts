import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOf5CustomControlComponent } from './best-of-5-custom-control.component';

describe('BestOf5CustomControlComponent', () => {
  let component: BestOf5CustomControlComponent;
  let fixture: ComponentFixture<BestOf5CustomControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestOf5CustomControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOf5CustomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
