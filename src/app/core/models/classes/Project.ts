import { Task } from './Task';

export class Project {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;
  priority: string;
  createdBy: string;
  createdDate: Date;
  updatedBy: string;
  updatedDate: Date;
  tasks: Task[];

  constructor() {
    this.title = '';
    this.description = '';
    this.startDate = new Date();
    this.endDate = new Date();
    this.status = '';
    this.priority = '';
    this.createdBy = '';
    this.createdDate = new Date();
    this.updatedBy = '';
    this.updatedDate = new Date();
    this.tasks = [];
  }
}
