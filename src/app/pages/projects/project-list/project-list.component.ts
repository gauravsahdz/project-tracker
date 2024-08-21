import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { timeLeft } from '../../../core/utils/helper';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  @ViewChild('createButton') createButton!: ButtonComponent;

  projects = [];

  pages = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    const data = localStorage.getItem('projects');
    const tasks = localStorage.getItem('tasks');

    if (data) {
      this.projects = JSON.parse(data);
      this.pages = Math.ceil(this.projects.length / 5);
    }

    if (tasks) {
      const tasksData = JSON.parse(tasks);
      this.projects.map((project: any) => {
        const projectTasks = tasksData.filter(
          (task: any) => task.projectId === project.id
        );
        project.totalTasks = projectTasks.length;
        project.dueDate = timeLeft(project.startDate, project.endDate);
        return project;
      });
    }
  }

  ngAfterViewInit() {
    this.createButton.onPress = () => this.onCreate();
  }

  onCreate(): void {
    this.router.navigate(['/projects/create']);
  }
}
