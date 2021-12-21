import { CategorysEditorComponent } from './categorys-editor/categorys-editor.component';
import { OrganizationComponent } from './organization.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrganizationComponent
  },
  {
    path: 'categories',
    component: CategorysEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
