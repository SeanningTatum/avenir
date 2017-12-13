import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'app/views/clients/models/client.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  @Input() client: Client;
  @Output() updateClient = new EventEmitter<Client>();

  public editMode: boolean;

  constructor() { }

  ngOnInit() {
  }

  update() {
    this.updateClient.emit(this.client);
  }

}
