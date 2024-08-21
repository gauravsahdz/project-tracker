import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  projects = [
    {
      title: 'Build CRM',
      description: 'This is the project we will be focusing on.',
      projectType: 'New',
      assignee: true,
      startDate: '2024-08-14',
      endDate: '2024-08-13',
      priority: 'High',
      id: 'm1cftkysh',
    },
  ];

  tasks = [
    {
      title: 'Design UI/Ux',
      description: 'Design a beautiful UI/Ux for this project.',
      dueDate: '2024-08-06',
      assignee: 'Member 2',
      status: 'Pending',
      id: 'v76s1ajtj',
      projectId: 'm1cftkysh',
    },
    {
      title: 'Build Frontend',
      description: 'Your task is to build frontend using Angular version 18.',
      dueDate: '2024-08-19',
      assignee: 'Member 2',
      status: 'Pending',
      id: 'o2vevtd2e',
      projectId: 'm1cftkysh',
    },
  ];

  ngOnInit() {
    // localStorage.setItem('projects', JSON.stringify(this.projects));
    // localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
