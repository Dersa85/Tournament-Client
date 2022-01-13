import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupEditorComponent } from './group-editor/group-editor.component';
import { GroupComponent } from './group/group.component';


@NgModule({
  declarations: [
    OrganizationComponent,
    GroupEditorComponent,
    GroupComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OrganizationModule { }
