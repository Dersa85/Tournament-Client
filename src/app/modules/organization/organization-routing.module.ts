import { GroupEditorComponent } from './group-editor/group-editor.component';
import { OrganizationComponent } from './organization.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationComponent
  },
  {
    path: 'group-editor',
    component: GroupEditorComponent
  },
  {
    path: 'group-editor/:id',
    component: GroupEditorComponent
  },
  {
    path: 'group/:id',
    component: GroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
