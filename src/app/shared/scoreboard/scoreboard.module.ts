import { MaterialModule } from './../material/material.module';
import { DialogModule } from './../dialog/dialog.module';
import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeControlComponent } from './time-control/time-control.component';
import { BreakTimeControlComponent } from './break-time-control/break-time-control.component';
import { ScoreboardControlDesignComponent } from './scoreboard-control-design/scoreboard-control-design.component';



@NgModule({
  declarations: [
    TimeControlComponent,
    BreakTimeControlComponent,
    ScoreboardControlDesignComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    DialogModule,
    MaterialModule
  ],
  exports: [
    TimeControlComponent,
    BreakTimeControlComponent,
    ScoreboardControlDesignComponent,
  ]
})
export class ScoreboardControlsModule { }
