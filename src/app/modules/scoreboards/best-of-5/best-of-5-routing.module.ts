import { ControlComponent } from './control/control.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreboardContainerComponent } from './scoreboard-container/scoreboard-container.component';

const routes: Routes = [
  {
    path: 'scoreboard/:id',
    component: ScoreboardContainerComponent
  },
  {
    path: 'control/:id',
    component: ControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestOf5RoutingModule { }
