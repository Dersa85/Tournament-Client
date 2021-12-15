import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { BoardService } from './../../../../services/board.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamPointBoard } from 'src/app/interfaces/boards-interfaces';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-points-control',
  templateUrl: './team-points-control.component.html',
  styleUrls: ['./team-points-control.component.sass']
})
export class TeamPointsControlComponent {

  addPointsForm = this.fb.group({
    redPoints: this.fb.array([
      this.fb.control(0, [Validators.required]),
      this.fb.control(0, [Validators.required]),
      this.fb.control(0, [Validators.required]),
    ], [Validators.required]),
    bluePoints: this.fb.array([
      this.fb.control(0, [Validators.required]),
      this.fb.control(0, [Validators.required]),
      this.fb.control(0, [Validators.required]),
    ], [Validators.required])
  })

  
  board$!: Observable<TeamPointBoard>;

  constructor(
    private boardService: BoardService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.board$ = this.boardService.board;
  }

  
  get redPoints(): FormArray {
    return this.addPointsForm.get('redPoints') as FormArray;
  }

  get bluePoints(): FormArray {
    return this.addPointsForm.get('bluePoints') as FormArray;
  }

  addPoints() {
    this.board$.pipe(first()).subscribe( (board: TeamPointBoard) => {
      board.points[0] += this.getAverageAndSetZero(this.redPoints);
      board.points[1] += this.getAverageAndSetZero(this.bluePoints);
      this.boardService.updateBoard(board);
    })
  }

  getAverageAndSetZero(formArray: FormArray): number {
    const array = formArray.controls;
    let totalValue = 0;
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
      const pointControl = array[i];
      totalValue += pointControl.value;
      pointControl.setValue(0);
    }
    return Math.floor(totalValue / (arrayLength));
  }

  resetBoard() {
    this.board$.pipe(first()).subscribe((board: TeamPointBoard) => {
      board.points[0] = 0;
      board.points[1] = 0;
      board.countdown.isTimeRunning = false;
      board.countdown.timeLeft = board.countdown.totalTime;
      this.boardService.updateBoard(board);
    })
  }

  backToOverview() {
    this.router.navigate(['../../../'], {relativeTo: this.route})
  }

}
