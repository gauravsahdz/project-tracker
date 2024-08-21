import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCreateComponent } from './pages/projects/project-create/project-create.component';
import { ProjectDetailComponent } from './pages/projects/project-detail/project-detail.component';
import { TaskCreateComponent } from './pages/tasks/task-create/task-create.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full',
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'projects/create',
    component: ProjectCreateComponent,
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
  },
  {
    path: 'projects/:id/edit',
    component: ProjectDetailComponent,
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./pages/tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
    path: 'tasks/create/:projectId',
    component: TaskCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
