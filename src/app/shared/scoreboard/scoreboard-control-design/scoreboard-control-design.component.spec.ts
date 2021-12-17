import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardControlDesignComponent } from './scoreboard-control-design.component';

describe('ScoreboardControlDesignComponent', () => {
  let component: ScoreboardControlDesignComponent;
  let fixture: ComponentFixture<ScoreboardControlDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardControlDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardControlDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
