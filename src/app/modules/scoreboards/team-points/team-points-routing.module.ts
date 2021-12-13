import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamPointsControlComponent } from './team-points-control/team-points-control.component';
import { TeamPointsScoreboardContainerComponent } from './team-points-scoreboard-container/team-points-scoreboard-container.component';

const routes: Routes = [
  {
    path: 'scoreboard/:id',
    component: TeamPointsScoreboardContainerComponent
  },
  {
    path: 'control/:id',
    component: TeamPointsControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamPointsRoutingModule { }
