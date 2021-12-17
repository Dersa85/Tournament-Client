import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPointScoreboardComponent } from './team-point-scoreboard.component';

describe('TeamPointScoreboardComponent', () => {
  let component: TeamPointScoreboardComponent;
  let fixture: ComponentFixture<TeamPointScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPointScoreboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPointScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
