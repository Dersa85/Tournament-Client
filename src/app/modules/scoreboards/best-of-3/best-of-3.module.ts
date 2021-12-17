import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestOf3RoutingModule } from './best-of-3-routing.module';
import { BestOf3ScoreboardComponent } from './best-of-3-scoreboard/best-of-3-scoreboard.component';
import { ControlComponent } from './control/control.component';
import { ScoreboardContainerComponent } from './scoreboard-container/scoreboard-container.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PipesModule } from './../../../shared/pipes/pipes.module';
import { ScoreboardControlsModule } from 'src/app/shared/scoreboard/scoreboard.module';
import { BestOf3CustomControlComponent } from './best-of3-custom-control/best-of3-custom-control.component';


@NgModule({
  declarations: [
    BestOf3ScoreboardComponent,
    ControlComponent,
    ScoreboardContainerComponent,
    BestOf3CustomControlComponent
  ],
  imports: [
    CommonModule,
    BestOf3RoutingModule,
    PipesModule,
    MaterialModule,
    ScoreboardControlsModule
  ]
})
export class BestOf3Module { }
