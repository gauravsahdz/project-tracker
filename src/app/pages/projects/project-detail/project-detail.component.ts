import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  @ViewChild('assignButton') assignButton!: ButtonComponent;

  tasks = [];
  projectId = '';
  totalTasks = 0;
  project: any = {};

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const prodId = params['id'];
      this.projectId = prodId;
      const data = localStorage.getItem('tasks');
      const projects = localStorage.getItem('projects');
      if (projects) {
        const project = JSON.parse(projects).find(
          (project: any) => project.id === prodId
        );
        if (project) {
          this.project = project;
        }
      }
      if (data) {
        this.tasks = JSON.parse(data).filter(
          (task: any) => task.projectId === prodId
        );
        this.totalTasks = this.tasks.length;
      }
    });
  }

  ngAfterViewInit() {
    this.assignButton.onPress = () => this.onCreate();
  }

  onCreate(): void {
    this.router.navigate([`/tasks/create/${this.projectId}`]);
  }

  onBack(): void {
    this.router.navigate(['/projects']);
  }
}
