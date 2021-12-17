import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOf3CustomControlComponent } from './best-of3-custom-control.component';

describe('BestOf3CustomControlComponent', () => {
  let component: BestOf3CustomControlComponent;
  let fixture: ComponentFixture<BestOf3CustomControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestOf3CustomControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOf3CustomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
