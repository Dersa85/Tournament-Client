import { Socket } from 'ngx-socket-io';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewBoardDialogComponent } from './new-board-dialog/new-board-dialog.component';
import { BestOf3Boards, TeamPointBoards } from 'src/app/interfaces/boards-interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './scoreboards.component.html',
  styleUrls: ['./scoreboards.component.sass']
})
export class ScoreboardsComponent {

  allBestOf3Boards$: Observable<BestOf3Boards> = this.socket.fromEvent(`allBestOf3Boards`);
  allTeamPointBoards$: Observable<TeamPointBoards> = this.socket.fromEvent(`allTeamPointBoards`);
 
  constructor(
    private socket: Socket,
    public dialog: MatDialog,
    // public boardService: BoardService
    ) {
    this.socket.emit('getAllBoards');
    // this.allBoards$ = this.allBoards()
  }

  sendMessage(msg: string) {
    this.socket.emit('getScoreboard', msg);
  }

  // allBoards(): Observable<Boards> {
  //   return this.socket.fromEvent(`allBoards`);
  // }

  openNewBoardDialog() {
    this.dialog.open(NewBoardDialogComponent);
  }

}
