import { NewBoardDialogComponent } from './new-board-dialog/new-board-dialog.component';
import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogChangeTotalTimeComponent } from './dialog-change-total-time/dialog-change-total-time.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    DialogChangeTotalTimeComponent,
    NewBoardDialogComponent,
    LoginDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DialogChangeTotalTimeComponent,
    NewBoardDialogComponent,
    LoginDialogComponent
  ]
})
export class DialogModule { }
