import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-scoreboard-control-design',
  templateUrl: './scoreboard-control-design.component.html',
  styleUrls: ['./scoreboard-control-design.component.sass']
})
export class ScoreboardControlDesignComponent {

  constructor(
    private boardService: BoardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  resetScoreboard(): void {
    this.boardService.resetScoreboard()
  }

  backToOverview() {
    this.router.navigate(['../../../'], {relativeTo: this.route})
  }

}
