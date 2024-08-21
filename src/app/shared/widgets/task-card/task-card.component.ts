import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task: any;

  constructor(private router: Router) {}

  handleEdit(projectId: string, event: MouseEvent): void {
    event.stopPropagation();
    this.router.navigate([`/projects/${projectId}/edit`]);
  }

  handleDelete(event: MouseEvent): void {
    event.stopPropagation();
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = tasks.filter((task: any) => task.id !== this.task.id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    alert('Task deleted successfully.');
    window.location.reload();
  }
}
