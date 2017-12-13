import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'app/views/shared/services/task.service';
import { Task } from 'app/views/shared/models/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['../../../../../../../scss/vendors/bs-datepicker/bs-datepicker.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateTaskComponent implements OnInit {

  // Datepicker
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
  model;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() { }

  createTask(taskName) {
    const key = this.route.parent.snapshot.paramMap.get('key');
    this.taskService.add(new Task(taskName.value, this.bsValue.toDateString(), false, key, null));
    taskName.value = '';
  }

}
