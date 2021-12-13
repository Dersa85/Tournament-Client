import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../../shared/material/material.module';
import { TeamPointsControlComponent } from './team-points-control/team-points-control.component';
import { PipesModule } from './../../../shared/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamPointsRoutingModule } from './team-points-routing.module';
import { TeamPointsScoreboardComponent } from './team-points-scoreboard/team-points-scoreboard.component';
import { TeamPointsScoreboardContainerComponent } from './team-points-scoreboard-container/team-points-scoreboard-container.component';
import { DialogModule } from 'src/app/shared/dialog/dialog.module';
import { ScoreboardControlsModule } from 'src/app/shared/scoreboard/scoreboard.module';


@NgModule({
  declarations: [
    TeamPointsControlComponent,
    TeamPointsScoreboardComponent,
    TeamPointsScoreboardContainerComponent
  ],
  imports: [
    CommonModule,
    TeamPointsRoutingModule,
    PipesModule,
    MaterialModule,
    DialogModule,
    ScoreboardControlsModule,
    ReactiveFormsModule
  ]
})
export class TeamPointsModule { }
