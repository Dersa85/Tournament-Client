import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BestOf3Board } from 'src/app/interfaces/boards-interfaces';
import { BoardService } from 'src/app/services/board.service';
import { first, take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket,  } from 'ngx-socket-io';
import { MatDialog } from '@angular/material/dialog';
import { DialogChangeTotalTimeComponent } from 'src/app/shared/dialog/dialog-change-total-time/dialog-change-total-time.component';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.sass']
})
export class ControlComponent implements OnInit {

  board$!: Observable<BestOf3Board>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private boardService : BoardService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.board$ = this.boardService.board;
  }

  changeTotalTime() {
    this.dialog.open(DialogChangeTotalTimeComponent);
  }

  stopCountdown(): void {
    this.boardService.stopCountdown();
  }

  startCountdown(): void {
    this.boardService.startCountdown();
  }

  resetCountdown(): void {
    this.boardService.resetCountdown();
  }

  setNextWinner(value: number): void {
    this.board$.pipe(take(1)).subscribe((board: any) => {
      const rounds = board.rounds
      for (let i = 0; i < rounds.length; i++) {
        if (rounds[i] == 0) {
          rounds[i] = value
          this.boardService.updateBoard(board)
          return;
        }
      }
    })
  }

  removeLastWinner(): void {
    this.board$.pipe(first()).subscribe( (board: BestOf3Board) => {
      const rounds = board.rounds
      for (let i = rounds.length -1; i >= 0; i--) {
        if (rounds[i] != 0) {
          rounds[i] = 0;
          this.boardService.updateBoard(board)
          return;
        }
      }
    })
  }

  resetBoard(): void {
    this.board$.pipe(first()).subscribe((board: BestOf3Board) => {
      board.rounds = [0, 0, 0, 0, 0, 0];
      board.countdown.isTimeRunning = false
      board.countdown.timeLeft = board.countdown.totalTime;
      this.boardService.updateBoard(board);
    })
  }

  backToOverview() {
    this.router.navigate(['../../../'], {relativeTo: this.route})
  }

}
