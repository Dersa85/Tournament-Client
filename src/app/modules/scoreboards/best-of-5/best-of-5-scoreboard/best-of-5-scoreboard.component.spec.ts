import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOf5ScoreboardComponent } from './best-of-5-scoreboard.component';

describe('BestOf5ScoreboardComponent', () => {
  let component: BestOf5ScoreboardComponent;
  let fixture: ComponentFixture<BestOf5ScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestOf5ScoreboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOf5ScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
