import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material/material.module';
import { TeamPointControlComponent } from './team-point-control/team-point-control.component';
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamPointsRoutingModule } from './team-point-routing.module';
import { TeamPointScoreboardComponent } from './team-point-scoreboard/team-point-scoreboard.component';
import { TeamPointScoreboardContainerComponent } from './team-point-scoreboard-container/team-point-scoreboard-container.component';
import { DialogModule } from 'src/app/shared/dialog/dialog.module';
import { ScoreboardControlsModule } from 'src/app/shared/scoreboard/scoreboard.module';
import { TeamPointCustomControlComponent } from './team-point-custom-control/team-point-custom-control.component';


@NgModule({
  declarations: [
    TeamPointControlComponent,
    TeamPointScoreboardComponent,
    TeamPointScoreboardContainerComponent,
    TeamPointCustomControlComponent
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
export class TeamPointModule { }
