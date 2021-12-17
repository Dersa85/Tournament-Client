import { DialogChangeTotalTimeComponent } from './../../dialog/dialog-change-total-time/dialog-change-total-time.component';
import { BoardService } from './../../../services/board.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-time-control',
  templateUrl: './time-control.component.html',
  styleUrls: ['./time-control.component.sass']
})
export class TimeControlComponent implements OnInit {

  countdownType = 'countdown';

  board$!: Observable<any>;
  constructor(
    private boardService : BoardService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.board$ = this.boardService.board;
  }

  changeTotalTime() {
    this.dialog.open(DialogChangeTotalTimeComponent,  {data: 'countdown'});
  }

  stopCountdown(): void {
    this.boardService.stopCountdown(this.countdownType);
  }

  startCountdown(): void {
    this.boardService.startCountdown(this.countdownType);
  }

  resetCountdown(): void {
    this.boardService.resetCountdown(this.countdownType);
  }

}
