import { Countdown } from './../../../../server/modules/interfaces/board-interface';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';
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

  soundBeginBattle = new Audio();
  soundEndBattle = new Audio();
  soundBreakTimeEnd = new Audio();
  soundBattleTimeEnds = new Audio();

  boardType?: string;
  boardId?: string;

  boardSubsctiption?:Subscription;
  countdownSubscription?: Subscription
  breakTimeSubscription?: Subscription

  private board$: BehaviorSubject<any> = new BehaviorSubject(null)
  private transformScale$!: Observable<string>;

  constructor(public socket: Socket) {
    this.loadSounds();
    this.checkTimeForSounds();
  }

  loadSounds() {
    this.soundBeginBattle.src = '/assets/sounds/kampf_beginn.wav';
    this.soundEndBattle.src = '/assets/sounds/kampf_ende.wav';
    this.soundBreakTimeEnd.src = '/assets/sounds/pause_ende.wav';
    this.soundBattleTimeEnds.src = '/assets/sounds/zeit_knapp.wav';
    this.soundBeginBattle.load();
    this.soundEndBattle.load();
    this.soundBreakTimeEnd.load();
    this.soundBattleTimeEnds.load();
  }

  checkTimeForSounds() {
    // all times in ms
    const timeEnding = 11 * 1000;
    const ended = 0.99 * 1000; // max 0.99 secounds
    
    let lastCountdownTime = 9999999999;
    let lastBreakTime = 9999999999;
    
    this.board$.subscribe((board: any) => {
      
      if (board) {

        if (board.countdown) {
          const countdown: Countdown = board.countdown
          
          if (countdown.timeLeft < countdown.totalTime && lastCountdownTime == countdown.totalTime)
          this.soundBeginBattle.play()
          
          if (countdown.timeLeft <= timeEnding && lastCountdownTime > timeEnding && countdown.isTimeRunning)
          this.soundBattleTimeEnds.play()
          
          if (countdown.timeLeft == countdown.totalTime && lastCountdownTime < ended )
          this.soundEndBattle.play();
          
          lastCountdownTime = countdown.timeLeft;
        }
        if (board.breakTime) {
          const breakTime: Countdown = board.breakTime;
          if (breakTime.timeLeft == breakTime.totalTime && lastBreakTime < ended) {
            this.soundBreakTimeEnd.play();
          }
          lastBreakTime = breakTime.timeLeft;
        }
      }
      })
  }
  
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
    this.boardType = board;
    this.boardId = id;
    this.unsubscribeBoard();
    this.subscribeNewBoard(board, id);
    this.socket.emit('getBord', board, id );
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

  unsubscribeBoard() {
    if (this.boardSubsctiption) this.boardSubsctiption.unsubscribe();
  }

  subscribeNewBoard(board: string, id: string) {
    this.boardSubsctiption = this.socket.fromEvent(`board/${board}/${id}`).subscribe((value: any) => {
      this.board$.next(value);
    })
  }

}
