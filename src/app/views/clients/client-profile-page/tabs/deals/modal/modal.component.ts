import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Deal } from 'app/views/shared/models/deal.model';
import { DealService } from 'app/views/shared/services/deal.service';
import { Observable } from 'rxjs/Observable';
import { Unit } from 'app/views/shared/models/unit.model';
import { UnitService } from 'app/views/shared/services/units.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../../../../../scss/vendors/bs-datepicker/bs-datepicker.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Input() currentKey: string;

  //
  floors: number[] = [];
  letters: string[] = [];
  floorLetter: string;
  floorNumber: number;

  filterQuery = '';
  milestones: string[] = ['Prospect', 'Won', 'Lost', 'Proposal'];

  unit$: Observable<Unit>;
  occupied: boolean;

  // Date picker
  minDate = new Date(2010, 5, 10);
  maxDate = new Date(2030, 12, 15);
  bsValue: Date = new Date();
  bsRangeValue: any = [null, null];

  constructor(private dealService: DealService, private unitService: UnitService) { }

  ngOnInit() {
    this.initFloorsAndLetters();
  }

  changeQuery() {
    this.filterQuery = (+this.floorNumber || '') + (this.floorLetter || '');

    if (this.floorLetter && this.floorNumber) {
      this.unit$ = this.unitService.get(this.filterQuery).valueChanges();
      this.unit$.subscribe( unit => this.occupied = unit.occupied);
    }
  }

  addDeal(form: NgForm) {
    if (form.invalid) return;

    const f = this.createDeal(form);
    this.dealService.add(f);

    if (form.value.milestone === 'won' && !this.occupied) {
      this.unitService.updateOwnership(this.filterQuery, this.currentKey, f);
    }

    form.reset();
  }

  hide() {
    this.close.emit();
  }

  private createDeal (form) {
    return new Deal(
      form.value.dealName,
      form.value.value,
      form.value.milestone,
      this.currentKey,
      this.bsRangeValue[0] ? this.bsRangeValue[0].toJSON() : null,
      this.bsRangeValue[1] ? this.bsRangeValue[1].toJSON() : null
    )
  }

  private initFloorsAndLetters() {
    for (let x = 0; x < 23; x++) {
      if (x >= 9 && x < 22) this.floors.push(x);
      this.letters.push(String.fromCharCode(x + 65));
    }
  }

}
