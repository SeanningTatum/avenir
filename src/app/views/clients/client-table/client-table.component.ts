import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ClientService } from '../services/client.service';
import { Observable } from 'rxjs/Observable';
import { Client } from 'app/views/clients/models/client.model';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {
  public modalRef: BsModalRef;
  public myModal;

  public data: Observable<Client[]>;
  public filterQuery = '';

  showSpinner: Boolean = true

  constructor(private modalService: BsModalService, private clientService: ClientService) { }

  ngOnInit() {
    this.data = this.clientService.getAllWithKey();
    this.data.subscribe( () => this.showSpinner = false);
  }

  // Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  // Data Table
  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.name.length;
  }


}
