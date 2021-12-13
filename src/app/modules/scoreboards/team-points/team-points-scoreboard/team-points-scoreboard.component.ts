import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamPointBoard } from 'src/app/interfaces/boards-interfaces';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-team-points-scoreboard',
  templateUrl: './team-points-scoreboard.component.html',
  styleUrls: ['./team-points-scoreboard.component.sass']
})
export class TeamPointsScoreboardComponent {

  BORD_TYPE = 'TeamPointBoard';

  board$!: Observable<TeamPointBoard>;
  scale$!: Observable<string>;

  constructor(
    private boardService: BoardService,
    private hostRef: ElementRef,
    private router: ActivatedRoute,
  ) {
    this.getBoard();
    this.getScale();
  }

  getScale() {
    this.boardService.setTransformScale(this.hostRef.nativeElement);
    this.scale$ = this.boardService.transformScale;
  }

  getBoard() {
    const boardId = this.router.snapshot.paramMap.get('id');
    this.boardService.setBoard(this.BORD_TYPE, boardId!);
    this.board$ = this.boardService.board;
  }

}
