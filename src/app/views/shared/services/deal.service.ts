import { Injectable } from '@angular/core';
import { DataService } from 'app/views/shared/services/data.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Deal } from 'app/views/shared/models/deal.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';
import { Unit } from 'app/views/shared/models/unit.model';

@Injectable()
export class DealService extends DataService {
  dbRef: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    super('deals', db);
    this.dbRef = db;
  }

  searchUnits(term: string): Observable<Unit[]> {
    if (!term.trim()) {
      return of([]);
    }

    console.log(term);

    return this.dbRef.list<Unit>('units', ref => {
      return ref.orderByKey().equalTo(term);
    })
    .snapshotChanges().map(changes => {
      return changes.map<any>(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  private log(str: string) {
    console.log(str);
  }


}
