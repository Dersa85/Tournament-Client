import { DialogChangeTotalTimeComponent } from 'src/app/shared/dialog/dialog-change-total-time/dialog-change-total-time.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-break-time-control',
  templateUrl: './break-time-control.component.html',
  styleUrls: ['./break-time-control.component.sass']
})
export class BreakTimeControlComponent {

  countdownType = 'breakTime';

  board$!: Observable<any>;
  constructor(
    private boardService : BoardService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.board$ = this.boardService.board;
  }

  changeTotalTime() {
    this.dialog.open(DialogChangeTotalTimeComponent, {data: 'breakTime'});
  }

  // Unused
  // stopBreakTime(): void {
  //   this.boardService.stopBreakTime();
  // }

  startCountdown(): void {
    this.boardService.startCountdown(this.countdownType);
  }

  resetCountdown(): void {
    this.boardService.resetCountdown(this.countdownType);
  }

}
