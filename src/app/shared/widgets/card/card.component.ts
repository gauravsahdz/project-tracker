import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() project: any;

  constructor(private router: Router) {}

  handleClick(): void {
    this.router.navigate([`/projects/${this.project.id}`]);
  }

  handleEdit(projectId: string, event: MouseEvent): void {
    event.stopPropagation();
    this.router.navigate([`/projects/${projectId}/edit`]);
  }

  handleDelete(event: MouseEvent): void {
    event.stopPropagation();
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    const updatedProjects = projects.filter(
      (project: any) => project.id !== this.project.id
    );
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    alert('Project deleted successfully.');
    window.location.reload();
  }
}
