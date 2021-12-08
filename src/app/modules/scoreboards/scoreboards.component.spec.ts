import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardsComponent } from './scoreboards.component';

describe('ScoreboardsComponent', () => {
  let component: ScoreboardsComponent;
  let fixture: ComponentFixture<ScoreboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
