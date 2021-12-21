import { DialogModule } from 'src/app/shared/dialog/dialog.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreboardsRoutingModule } from './scoreboards-routing.module';
import { ScoreboardsComponent } from './scoreboards.component';


import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    ScoreboardsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ScoreboardsRoutingModule,
    PipesModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class ScoreboardsModule { }
