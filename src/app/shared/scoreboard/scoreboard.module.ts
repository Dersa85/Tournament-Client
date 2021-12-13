import { MaterialModule } from './../material/material.module';
import { DialogModule } from './../dialog/dialog.module';
import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeControlComponent } from './time-control/time-control.component';



@NgModule({
  declarations: [
    TimeControlComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    DialogModule,
    MaterialModule
  ],
  exports: [
    TimeControlComponent
  ]
})
export class ScoreboardControlsModule { }
