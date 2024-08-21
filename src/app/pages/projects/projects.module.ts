import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
  },
];

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class ProjectsModule {}
