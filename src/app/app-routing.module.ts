import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/overview',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
    pathMatch: 'full'
  },
  {
    path: 'scoreboards',
    loadChildren: () => import('./modules/scoreboards/scoreboards.module').then(m => m.ScoreboardsModule)
  },
  {
    path: 'organization',
    loadChildren: () => import('./modules/organization/organization.module').then(m => m.OrganizationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
