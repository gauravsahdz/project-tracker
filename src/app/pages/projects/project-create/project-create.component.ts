import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { teamMembers } from '../../../core/constant/constants';
import { generateRandomProjectId } from '../../../core/utils/helper';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.scss',
})
export class ProjectCreateComponent {
  teamMembers = teamMembers;

  projectForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    projectType: new FormControl('', Validators.required),
    assignee: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    priority: new FormControl('High', Validators.required),
  }) as FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      projectType: ['', Validators.required],
      assignee: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      priority: ['High', Validators.required],
    });
  }

  onSubmit(): void {
    const projects = localStorage.getItem('projects');
    const project = this.projectForm.value;
    project.id = generateRandomProjectId();
    if (this.projectForm.valid) {
      if (projects) {
        localStorage.setItem(
          'projects',
          JSON.stringify([...JSON.parse(projects), project])
        );
      } else {
        localStorage.setItem('projects', JSON.stringify([project]));
      }
      alert('Project created successfully.');
      this.router.navigate([`/projects`]);
    } else {
      alert('Please fill all the required fields.');
    }
  }

  onReset(): void {
    this.projectForm.reset();
    alert('Form cleared.');
  }

  onClose(): void {
    window.history.back();
  }
}
