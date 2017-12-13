import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'app/views/shared/models/task.model';
import { TaskService } from 'app/views/shared/services/task.service';

import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {
  currentKey: string;
  pendingTasks: Task[] = [];
  finishedTasks: Task[] = [];
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.currentKey = this.route.parent.snapshot.paramMap.get('key');
    this.subscription = this.populateTasks();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private populateTasks() {
    return this.taskService.getBasedOnClient(this.currentKey)
      .subscribe((tasks: Task[]) => {
        this.pendingTasks  = tasks.filter(task => !task.finished)
                                  .sort((a, b) => a.dueDate > b.dueDate ? 1 : 0);
        this.finishedTasks = tasks.filter(task =>  task.finished)
                                  .sort((a, b) => a.finishDate <= b.finishDate ? 1 : 0);
      });
  }

}
