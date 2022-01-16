import { Socket } from 'ngx-socket-io';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewBoardDialogComponent } from '../../shared/dialog/new-board-dialog/new-board-dialog.component';
import { BestOf5Boards, TeamPointBoards } from 'src/app/interfaces/boards-interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './scoreboards.component.html',
  styleUrls: ['./scoreboards.component.sass']
})
export class ScoreboardsComponent {

  allBestOf5Boards$: Observable<BestOf5Boards> = this.socket.fromEvent(`allBestOf5Boards`);
  allTeamPointBoards$: Observable<TeamPointBoards> = this.socket.fromEvent(`allTeamPointBoards`);
 
  constructor(
    public authService: AuthService,
    private socket: Socket,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.socket.emit('getAllBoards');
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

  navigateBack() {
    this.router.navigate(['./..'], {relativeTo: this.route})
  }

}
