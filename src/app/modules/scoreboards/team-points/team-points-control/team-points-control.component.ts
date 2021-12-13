import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { BoardService } from './../../../../services/board.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamPointBoard } from 'src/app/interfaces/boards-interfaces';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-team-points-control',
  templateUrl: './team-points-control.component.html',
  styleUrls: ['./team-points-control.component.sass']
})
export class TeamPointsControlComponent implements OnInit {

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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
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
      board.points[0] += this.getSumAndSetZero(this.redPoints);
      board.points[1] += this.getSumAndSetZero(this.bluePoints);
      this.boardService.updateBoard(board);
    })
  }

  getSumAndSetZero(formArray: FormArray): number {
    const array = formArray.controls;
    let totalValue = 0;
    for (let i = 0; i < array.length; i++) {
      const pointControl = array[i];
      totalValue += pointControl.value;
      pointControl.setValue(0);
    }
    return totalValue;
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

}
