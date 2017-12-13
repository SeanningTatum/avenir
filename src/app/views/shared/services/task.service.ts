import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from 'app/views/shared/services/data.service';

@Injectable()
export class TaskService extends DataService {
  database: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    super('tasks', db);
    this.database = db;
  }

  // Gets all the tasks that the client owns with meta data
  getBasedOnClient(key: string) {
    return this.database.list('tasks', ref => {
      return ref.orderByChild('ownedBy').equalTo(key);
    })
    .snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  finish(task) {
    task.finishDate = new Date().toDateString();
    this.database.object('tasks/' + task.key).update({finished: true, finishDate: task.finishDate});
  }

}
