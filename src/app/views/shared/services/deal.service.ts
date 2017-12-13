import { Injectable } from '@angular/core';
import { DataService } from 'app/views/shared/services/data.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DealService extends DataService {

  constructor(db: AngularFireDatabase) {
    super('deals', db);
  }


}
