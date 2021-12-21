import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorysEditorComponent } from './categorys-editor/categorys-editor.component';


@NgModule({
  declarations: [
    OrganizationComponent,
    CategorysEditorComponent
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
