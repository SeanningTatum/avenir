import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'app/views/shared/models/task.model';
import { TaskService } from 'app/views/shared/services/task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  finish(task: Task) {
    this.taskService.finish(task);
  }

}
