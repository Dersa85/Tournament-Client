import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-new-board-dialog',
  templateUrl: './new-board-dialog.component.html',
  styleUrls: ['./new-board-dialog.component.sass']
})
export class NewBoardDialogComponent implements OnInit {

  form = this.fb.group({
    name: ['', [Validators.required]],
    board: ['BestOf3Board', [Validators.required]]
  })
  
  constructor(private socket: Socket, private fb: FormBuilder, private dialogRef: MatDialogRef<NewBoardDialogComponent>) { }

  ngOnInit(): void {
  }

  createBoard() {
    console.log(this.form.value);
    this.socket.emit('createBoard', this.form.value)
    this.dialogRef.close();
    
  }

}
