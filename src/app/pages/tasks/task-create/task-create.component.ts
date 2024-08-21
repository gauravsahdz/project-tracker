import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss',
})
export class TaskCreateComponent {
  taskForm!: FormGroup;
  teamMembers = ['Yash Ghori', 'Member 1', 'Member 2', 'Member 3'];
  projectId = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.projectId = params['projectId'];
    });
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      assignee: ['', Validators.required],
      status: ['Pending', Validators.required],
    });
  }

  generateRandomProjectId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  onSubmit(): void {
    const tasks = localStorage.getItem('tasks');
    const task = this.taskForm.value;
    task.id = this.generateRandomProjectId();
    task.projectId = this.projectId;
    if (this.taskForm.valid) {
      if (tasks) {
        localStorage.setItem(
          'tasks',
          JSON.stringify([...JSON.parse(tasks), task])
        );
      } else {
        localStorage.setItem('tasks', JSON.stringify([task]));
      }
      alert('Task created successfully.');
      this.router.navigate([`/projects/${this.projectId}`]);
    } else {
      alert('Please fill all the required fields.');
    }
  }

  onReset(): void {
    this.taskForm.reset();
    alert('Form cleared.');
  }

  onClose(): void {
    window.history.back();
  }
}
