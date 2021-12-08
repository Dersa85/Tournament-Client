import { Socket } from 'ngx-socket-io';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewBoardDialogComponent } from './new-board-dialog/new-board-dialog.component';
import { Boards } from 'src/app/interfaces/boards-interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './scoreboards.component.html',
  styleUrls: ['./scoreboards.component.sass']
})
export class ScoreboardsComponent {

  allBoards$: Observable<Boards> = this.socket.fromEvent(`getAllBoards`);
 
  constructor(private socket: Socket, public dialog: MatDialog) {
    this.socket.emit('getAllBoards');
    this.allBoards$ = this.allBoards()
  }


  sendMessage(msg: string) {
    this.socket.emit('getScoreboard', msg);
  }

  allBoards(): Observable<Boards> {
    return this.socket.fromEvent(`allBoards`);
  }

  openNewBoardDialog() {
    this.dialog.open(NewBoardDialogComponent);
  }

}
