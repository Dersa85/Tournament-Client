import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamPointsRoutingModule } from './team-points-routing.module';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ScoreboardContainerComponent } from './scoreboard-container/scoreboard-container.component';


@NgModule({
  declarations: [
    ScoreboardComponent,
    ScoreboardContainerComponent
  ],
  imports: [
    CommonModule,
    TeamPointsRoutingModule
  ]
})
export class TeamPointsModule { }
