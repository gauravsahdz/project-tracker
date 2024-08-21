import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './task-create/task-create.component';

const routes: Routes = [
  {
    path: '',
    component: TaskCreateComponent,
  },
];

@NgModule({
  declarations: [TaskCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TasksModule {}
