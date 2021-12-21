import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, fromEvent, Observable, Subject, Subscriber, Subscription } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

@Injectable()
export class BoardService {

  SCOREBOARD_HEIGHT = 180;
  SCOREBOARD_WIDTH = 320;

  BOARD_TYPES = [
    'BestOf3Board',
    'TeamPointBoard'
  ]

  boardType?: string;
  boardId?: string;

  boardSubsctiption?:Subscription;

  private board$: BehaviorSubject<any> = new BehaviorSubject(null)
  private transformScale$!: Observable<string>;

  constructor(public socket: Socket) { }
  
  getCalcScale(host: HTMLElement): number {
    const ratioWidth = this.calcRatio(this.SCOREBOARD_WIDTH, host.offsetWidth);
    const ratioHeight = this.calcRatio(this.SCOREBOARD_HEIGHT, host.offsetHeight);
    return Math.min(ratioWidth, ratioHeight);
  }
  
  startCountdown(countdownType: string): void {
    this.socket.emit('startCountdown', this.boardType, this.boardId, countdownType)
  }
  
  stopCountdown(countdownType: string) {
    this.socket.emit('stopCountdown', this.boardType, this.boardId, countdownType)
  }
  
  resetCountdown(countdownType: string) {
    this.socket.emit('resetCountdown', this.boardType, this.boardId, countdownType)
  }

  updateTotalCountdown(countdownType: string, newValue: number): void {
    this.socket.emit('updateTotalCountdown', this.boardType, this.boardId, countdownType, newValue)
  }

  resetScoreboard(): void {
    this.socket.emit('resetScoreboard', this.boardType, this.boardId)
  }

  setRoundWinner(value: number): void {
    this.socket.emit('setWinner', this.boardType, this.boardId, value)
  }
  
  removeLastWinner(): void {
    this.socket.emit('removeLastWinner', this.boardType, this.boardId)
  }

  // updateBoard(board: any) {
  //   this.socket.emit('updateBoard', this.boardType, this.boardId, board)
  // }
  
  setScoreboardSize(host: HTMLElement): void {
    const scoreboard = host.getElementsByClassName('scoreboard')[0] as HTMLElement;
    scoreboard.style.height = this.SCOREBOARD_HEIGHT + 'px';
    scoreboard.style.width = this.SCOREBOARD_WIDTH + 'px';
  }
  
  setBoard(board: string, id: string): void {
    this.boardType = board
    this.boardId = id
    if (this.boardSubsctiption) {
      this.boardSubsctiption.unsubscribe()
    }
    this.boardSubsctiption = this.socket.fromEvent(`board/${board}/${id}`).subscribe((value: any) => {
      this.board$.next(value)
    })
    this.socket.emit('getBord', board, id )
  }
  
  setTransformScale(host: HTMLElement): void {
    this.transformScale$ = fromEvent(window, 'resize')
    .pipe(
      map((_event:Event) => this.getCalcScale(host)),
      map( (value: number) => `scale(${value})`))
      
    setTimeout(() => {
      this.setScoreboardSize(host);
      window.dispatchEvent(new Event('resize'))
    }, 1);
  }

  updateTeamPoints(teamPoints: [number, number]): void {
    this.socket.emit('updateTeamPoints', this.boardType, this.boardId, teamPoints)
  }

  get board(): Observable<any> {
    return this.board$
  }
  
  get transformScale(): Observable<string> {
    return this.transformScale$;
  }
  
  private calcRatio(elementSize: number, viewportSize: number): number {
    return viewportSize / elementSize;
  }
}
