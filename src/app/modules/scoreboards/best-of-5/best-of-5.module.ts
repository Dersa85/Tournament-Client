import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestOf5RoutingModule } from './best-of-5-routing.module';
import { BestOf5ScoreboardComponent } from './best-of-5-scoreboard/best-of-5-scoreboard.component';
import { ControlComponent } from './control/control.component';
import { ScoreboardContainerComponent } from './scoreboard-container/scoreboard-container.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { ScoreboardControlsModule } from 'src/app/shared/scoreboard/scoreboard.module';
import { BestOf5CustomControlComponent } from './best-of-5-custom-control/best-of-5-custom-control.component';


@NgModule({
  declarations: [
    BestOf5ScoreboardComponent,
    ControlComponent,
    ScoreboardContainerComponent,
    BestOf5CustomControlComponent
  ],
  imports: [
    CommonModule,
    BestOf5RoutingModule,
    PipesModule,
    MaterialModule,
    ScoreboardControlsModule
  ]
})
export class BestOf5Module { }
