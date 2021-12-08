import { TimeLeftPipe } from 'src/app/shared/pipes/time-left/time-left.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TimeLeftPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeLeftPipe
  ]
})
export class PipesModule { }
