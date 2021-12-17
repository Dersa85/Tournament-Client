import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOf3ScoreboardComponent } from './best-of-3-scoreboard.component';

describe('BestOf3ScoreboardComponent', () => {
  let component: BestOf3ScoreboardComponent;
  let fixture: ComponentFixture<BestOf3ScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestOf3ScoreboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOf3ScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
