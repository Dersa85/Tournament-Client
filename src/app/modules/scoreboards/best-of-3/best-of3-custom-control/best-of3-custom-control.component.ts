import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, take } from 'rxjs/operators';
import { BestOf3Board } from 'src/app/interfaces/boards-interfaces';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-best-of3-custom-control',
  templateUrl: './best-of3-custom-control.component.html',
  styleUrls: ['./best-of3-custom-control.component.sass']
})
export class BestOf3CustomControlComponent implements OnInit {

  board$!: Observable<BestOf3Board>;
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.board$ = this.boardService.board;
  }

  setRoundWinner(value: number): void {
    this.boardService.setRoundWinner(value);
  }

  removeLastWinner(): void {
    this.boardService.removeLastWinner()
  }

}
