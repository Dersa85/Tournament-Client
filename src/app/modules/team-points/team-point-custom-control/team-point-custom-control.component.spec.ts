import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPointCustomControlComponent } from './team-point-custom-control.component';

describe('TeamPointCustomControlComponent', () => {
  let component: TeamPointCustomControlComponent;
  let fixture: ComponentFixture<TeamPointCustomControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPointCustomControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPointCustomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
