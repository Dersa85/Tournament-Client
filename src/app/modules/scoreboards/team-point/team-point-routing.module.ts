import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamPointControlComponent } from './team-point-control/team-point-control.component';
import { TeamPointScoreboardContainerComponent } from './team-point-scoreboard-container/team-point-scoreboard-container.component';

const routes: Routes = [
  {
    path: 'scoreboard/:id',
    component: TeamPointScoreboardContainerComponent
  },
  {
    path: 'control/:id',
    component: TeamPointControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamPointsRoutingModule { }
