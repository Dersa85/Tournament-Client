import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPointControlComponent } from './team-point-control.component';

describe('TeamPointControlComponent', () => {
  let component: TeamPointControlComponent;
  let fixture: ComponentFixture<TeamPointControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPointControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPointControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
