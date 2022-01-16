import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { BestOf5Board } from 'src/app/interfaces/boards-interfaces';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-best-of-5-scoreboard',
  templateUrl: './best-of-5-scoreboard.component.html',
  styleUrls: ['./best-of-5-scoreboard.component.sass']
})
export class BestOf5ScoreboardComponent {
  ROUND_COLORS = [
    'WHITE',  // neutral
    'RED',    // team 1 win
    'BLUE',   // team 2 win
    'YELLOW'  // draw
  ]

  BORD_TYPE = 'BestOf5Board';

  board$!: Observable<BestOf5Board>;
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
