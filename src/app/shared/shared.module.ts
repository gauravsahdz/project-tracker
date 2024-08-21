import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './widgets/card/card.component';
import { PaginationComponent } from './widgets/pagination/pagination.component';
import { TaskCardComponent } from './widgets/task-card/task-card.component';

@NgModule({
  declarations: [
    CardComponent,
    TaskCardComponent,
    ButtonComponent,
    PaginationComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    TaskCardComponent,
    ButtonComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
