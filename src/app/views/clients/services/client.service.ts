import { Injectable } from '@angular/core';
import { DataService } from 'app/views/shared/services/data.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ClientService extends DataService {

  constructor(db: AngularFireDatabase) {
    super('clients', db);
  }


}
