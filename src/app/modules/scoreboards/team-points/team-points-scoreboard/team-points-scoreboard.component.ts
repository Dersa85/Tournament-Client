import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { TeamPointBoard } from 'src/app/interfaces/boards-interfaces';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-team-points-scoreboard',
  templateUrl: './team-points-scoreboard.component.html',
  styleUrls: ['./team-points-scoreboard.component.sass']
})
export class TeamPointsScoreboardComponent {

  BORD_TYPE = 'TeamPointBoard';

  board$: Observable<TeamPointBoard>;
  points$: Observable<number[]>;
  scale$: Observable<string>;

  constructor(
    private boardService: BoardService,
    private hostRef: ElementRef,
    private router: ActivatedRoute,
  ) {
    this.board$ = this.getBoard();
    this.points$ = this.getPoints();
    this.scale$ = this.getScale();
  }

  getScale(): Observable<string> {
    this.boardService.setTransformScale(this.hostRef.nativeElement);
    return this.boardService.transformScale;
  }

  getBoard(): Observable<TeamPointBoard> {
    const boardId = this.router.snapshot.paramMap.get('id');
    this.boardService.setBoard(this.BORD_TYPE, boardId!);
    return this.boardService.board;
  }

  getPoints(): Observable<number[]> {
    const currentPoints = [0, 0]
    return combineLatest([this.boardService.board, interval(125)]).pipe(
      map(( [board, _int]: [TeamPointBoard, number] ) => {
        if (board == null) {
          return currentPoints
        }
        if (board.points[0] == 0 && board.points[1] == 0) {
          currentPoints[0] = 0;
          currentPoints[1] = 0;
        }
        const points = board.points;
        for (let i = 0; i < points.length; i++) {
          if(points[i] > currentPoints[i]) {
            currentPoints[i]++;
          }
        }
        return currentPoints
      }));
  }

}
