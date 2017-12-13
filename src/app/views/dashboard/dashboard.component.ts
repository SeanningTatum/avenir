import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Client } from 'app/views/clients/models/client.model';
import { ClientService } from 'app/views/clients/services/client.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  clients$: Observable<Client[]>;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clients$ = this.clientService.getAll();
  }

}
