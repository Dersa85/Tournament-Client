import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreboardsRoutingModule } from './scoreboards-routing.module';
import { ScoreboardsComponent } from './scoreboards.component';


import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { NewBoardDialogComponent } from './new-board-dialog/new-board-dialog.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    ScoreboardsComponent,
    NewBoardDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ScoreboardsRoutingModule,
    PipesModule,
    ReactiveFormsModule,
  ]
})
export class ScoreboardsModule { }
