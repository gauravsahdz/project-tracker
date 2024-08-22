# Project Tracker

A web application for managing and tracking projects, tasks, and team members. Built with Angular.

## Features

- Create, view, and manage projects
- Add tasks with priority, status, and assignee details
- Manage team members and assign roles
- Pagination for managing large project lists
- Responsive design

## Technologies Used

- **Frontend:** Angular, SCSS
- **Forms:** Reactive Forms in Angular

## Folder Structure

The folder structure of the project is organized to maintain scalability and clarity.

````bash
src/
│
├── app/
│   ├── core/                 # Core services and utilities
│   │   └── services/         # Project-wide services (e.g., ProjectService)
│   │
│   ├── pages/                # Pages (routing modules)
│   │   ├── project/          # Project-related modules (List, Create, Details)
│   │   │   ├── project-list/ # List all projects
│   │   │   ├── project-create/ # Create new project
│   │   │   └── project-detail/ # View project details
│   │   ├── task/             # Task-related modules
│   │   │   └── task-create/  # Create tasks in projects
│   │   └── dashboard/        # Main dashboard
│   │
│   ├── shared/               # Shared components, directives, and pipes
│   │   ├── components/       # Reusable components (e.g., Button, Card, Pagination)
│   │   ├── directives/       # Common directives used across the project
│   │   └── pipes/            # Common pipes for data transformation
│   │
│   ├── assets/               # Static assets (images, fonts, etc.)
│   ├── environments/         # Environment configuration files
│   └── styles/               # Global styles and theming
│
└── index.html                # Entry point for the application

### Key Components

- **`app/pages/project`**
  - `ProjectListComponent`: Displays a list of projects.
  - `ProjectCreateComponent`: Handles project creation.
  - `ProjectDetailComponent`: Shows details for a specific project.

- **`app/pages/task`**
  - `TaskCreateComponent`: A form for creating tasks within a project.

- **`app/shared/components`**
  - `ButtonComponent`: A reusable button with configurable labels and actions.
  - `CardComponent`: Displays project information in card format.
  - `PaginationComponent`: Controls pagination for project lists.

### Installation and Setup

#### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16.x or higher recommended)
- [Angular CLI](https://angular.io/cli)

#### Steps to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/gauravsahdz/project-tracker.git
   cd project-tracker
````

2. **Intall Dependencies**

```bash
npm install
```

3. **Run server**

```bash
ng serve
```

# The Project is deployed on below URL:

https://project-tracker-v1.netlify.app
