import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DataService {

  constructor(private dbName, private db: AngularFireDatabase) { }

  get(key: string) {
    return this.db.object<any>(this.dbName + '/' + key);
  }

  getBasedOnUser(key: string) {
    return this.db.list(this.dbName, ref => {
      return ref.orderByChild('ownedBy').equalTo(key);
    })
    .snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getAll() {
    return this.db.list(this.dbName).snapshotChanges().map(changes => {
      return changes.map<any>(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  add(resource) {
    this.db.list<any>(this.dbName).push(resource);
  }

  async update(resource, key: string) {
    const resource$ = await this.get(key);
    resource$.update(resource);
  }
}
