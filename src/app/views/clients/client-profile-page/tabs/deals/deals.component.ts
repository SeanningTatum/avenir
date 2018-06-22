import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Deal } from 'app/views/shared/models/deal.model';
import { DealService } from 'app/views/shared/services/deal.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-deals',
  templateUrl: 'deals.component.html'
})

export class DealsComponent implements OnInit {
  deals$: Observable<Deal[]>;

  modalRef: BsModalRef;
  currentKey: string;

  constructor(
    private modalService: BsModalService,
    private dealService: DealService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentKey = this.route.parent.parent.snapshot.paramMap.get('key');
    this.deals$ = this.dealService.getBasedOnUser(this.currentKey)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

}
