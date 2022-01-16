import { ScoreboardsComponent } from './scoreboards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ScoreboardsComponent
  },
  {
    path: 'best-of-5',
    loadChildren: () => import('./best-of-5/best-of-5.module').then(m => m.BestOf5Module),
  },
  {
    path: 'team-point',
    loadChildren: () => import('./team-point/team-point.module').then(m => m.TeamPointModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreboardsRoutingModule { }
