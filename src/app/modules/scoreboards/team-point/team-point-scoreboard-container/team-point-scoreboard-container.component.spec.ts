import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPointScoreboardContainerComponent } from './team-point-scoreboard-container.component';

describe('TeamPointScoreboardContainerComponent', () => {
  let component: TeamPointScoreboardContainerComponent;
  let fixture: ComponentFixture<TeamPointScoreboardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPointScoreboardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPointScoreboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
