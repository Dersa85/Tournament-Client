import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestOf3RoutingModule } from './best-of-3-routing.module';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ControlComponent } from './control/control.component';
import { ScoreboardContainerComponent } from './scoreboard-container/scoreboard-container.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PipesModule } from './../../../shared/pipes/pipes.module';
import { DialogModule } from 'src/app/shared/dialog/dialog.module';


@NgModule({
  declarations: [
    ScoreboardComponent,
    ControlComponent,
    ScoreboardContainerComponent
  ],
  imports: [
    CommonModule,
    BestOf3RoutingModule,
    PipesModule,
    MaterialModule,
    DialogModule
  ]
})
export class BestOf3Module { }
