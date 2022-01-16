import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BestOf5Board } from 'src/app/interfaces/boards-interfaces';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-best-of-5-custom-control',
  templateUrl: './best-of-5-custom-control.component.html',
  styleUrls: ['./best-of-5-custom-control.component.sass']
})
export class BestOf5CustomControlComponent implements OnInit {

  board$!: Observable<BestOf5Board>;
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
