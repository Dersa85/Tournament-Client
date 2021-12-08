import { ScoreboardsComponent } from './scoreboards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ScoreboardsComponent,
    pathMatch: 'full'
  },
  {
    path: 'best-of-3',
    loadChildren: () => import('./best-of-3/best-of-3.module').then(m => m.BestOf3Module),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreboardsRoutingModule { }
