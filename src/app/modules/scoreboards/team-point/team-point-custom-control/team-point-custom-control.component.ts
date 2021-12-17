import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { TeamPointBoard } from 'src/app/interfaces/boards-interfaces';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-team-point-custom-control',
  templateUrl: './team-point-custom-control.component.html',
  styleUrls: ['./team-point-custom-control.component.sass']
})
export class TeamPointCustomControlComponent implements OnInit {

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
      const points = board.points
      points[0] += this.getAverageAndSetZero(this.redPoints);
      points[1] += this.getAverageAndSetZero(this.bluePoints);
      this.boardService.updateTeamPoints(board.points)
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

}
