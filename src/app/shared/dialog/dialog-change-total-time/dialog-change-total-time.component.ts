import { FormBuilder, Validators } from '@angular/forms';
import { BoardService } from 'src/app/services/board.service';
import { Observable } from 'rxjs';
import { Component, Inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-change-total-time',
  templateUrl: './dialog-change-total-time.component.html',
  styleUrls: ['./dialog-change-total-time.component.sass']
})
export class DialogChangeTotalTimeComponent {

  board$!: Observable<any>;
  form = this.fb.group({
    minutes: [0, [Validators.required]],
    seconds: [0, [Validators.required]],
  })

  constructor(
    private dialogRef: MatDialogRef<DialogChangeTotalTimeComponent>,
    private boardService: BoardService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: string,
    ) {
      console.log("!!!!!!!!!!!!!!!!!!!!!", data);
      
    this.board$ = this.boardService.board
    this.board$.pipe(first()).subscribe((board:any) => {
      this.form.get('minutes')?.setValue(Math.floor(board[this.data].totalTime / 1000 / 60));
      this.form.get('seconds')?.setValue(Math.floor(board[this.data].totalTime % (1000 * 60) / 1000));
    })
  }

  timeChanged() {
    const secondsForm = this.form.get('seconds');
    const minutesForm = this.form.get('minutes');
    if (secondsForm?.value < 0) {
      secondsForm?.setValue(59);
      minutesForm?.setValue(minutesForm.value - 1);  
    }
    if (secondsForm?.value >= 60) {
      const currentSeconds = secondsForm?.value;
      minutesForm?.setValue(minutesForm.value + Math.floor(currentSeconds / 60));
      secondsForm?.setValue(currentSeconds % 60);
    }
    if (minutesForm?.value < 0) {
      minutesForm?.setValue(0);
    }
  }

  save() {
    const total = (this.form.get('minutes')?.value * 60 + this.form.get('seconds')?.value) * 1000
    this.boardService.updateTotalCountdown(this.data, total);
    this.close()
  }

  close() {
    this.dialogRef.close()
  }

}
