import { Client } from '../models/client.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/views/clients/services/client.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-client-profile-page',
  template: `
    <div *ngIf="loading"><loading-spinner></loading-spinner></div>
    <div class="animated fadeIn" *ngIf="client$ | async as client">
      <div class="row">
        <div class="col-sm-3">
          <app-client-card
            (updateClient)="update($event)"
            [client]="client"></app-client-card>
        </div>
        <div class="col-sm-9">
          <app-tabs></app-tabs>
        </div>
      </div>
    </div>
  `
})
export class ClientProfilePageComponent implements OnInit {
  client$: Observable<Client>;
  loading: boolean = true;
  private currentKey: string;

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    this.currentKey = this.route.snapshot.paramMap.get('key');
    this.client$ = this.clientService.get(this.currentKey).valueChanges();
    this.client$.subscribe( () => this.loading = false);
  }

  update(updatedClient: Client) {
    this.clientService.update(updatedClient, this.currentKey);
  }

}
