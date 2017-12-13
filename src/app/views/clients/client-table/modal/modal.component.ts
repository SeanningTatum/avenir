import { ClientService } from '../../services/client.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  options: string[] = ['Residencial', 'Commercial'];

  constructor(private clientService: ClientService) { }

  ngOnInit() {

  }

  addClient(form: NgForm) {
    if (!form.invalid) {
      this.clientService.add(new Client(form.value.fullname, form.value.email, form.value.phonenumber));
      form.reset();
    }

  }

  hide() {
    this.close.emit();
  }

}
