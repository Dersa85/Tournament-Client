import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogChangeTotalTimeComponent } from './dialog-change-total-time/dialog-change-total-time.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DialogChangeTotalTimeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DialogChangeTotalTimeComponent
  ]
})
export class DialogModule { }
