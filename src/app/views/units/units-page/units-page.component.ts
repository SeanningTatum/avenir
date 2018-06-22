import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { UnitService } from 'app/views/shared/services/units.service';
import { Unit } from 'app/views/shared/models/unit.model';
import { Observable } from 'rxjs/Observable';
import { ClientService } from 'app/views/clients/services/client.service';
import { Client } from 'app/views/clients/models/client.model';
import 'rxjs/add/operator/switchMap';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'app-units-page',
  templateUrl: './units-page.component.html',
  styleUrls: [
    './units-page.component.scss',
    '../../../../scss/vendors/toastr/toastr.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class UnitsPageComponent implements OnInit {
  unit$: Observable<Unit>;
  editMode: boolean = false;
  clientName: string;
  key: string;

  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    tapToDismiss: true,
    timeout: 2000
  });

  constructor(
    private route: ActivatedRoute,
    private unitsService: UnitService,
    private clientService: ClientService,
    private toasterService: ToasterService) { }

  async ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
    this.unit$ = await this.unitsService.get(this.key).snapshotChanges().map(c => ({ key: c.payload.key, ...c.payload.val() }));

    this.unit$.switchMap(unit => {
      return this.clientService.get(unit.ownedBy).valueChanges();
    })
    .subscribe(client => {
      this.clientName = client.name;
    });
  }

  toggleAircon(unit: Unit) {
    unit.aircon = !unit.aircon;
    this.unitsService.update(unit, this.key)
      .then( () => {
        this.toasterService.pop('info', 'Aircon updated', 'The aircon was updated!');
      })
      .catch((e: Error) => {
        this.toasterService.pop('danger', 'Error Occurred', e.message);
      })
  }

  toggleBlinds(unit: Unit) {
    unit.blinds = !unit.blinds;
    this.unitsService.update(unit, this.key)
      .then( () => {
        this.toasterService.pop('info', 'Blinds updated', 'The blinds were updated!');
      })
      .catch((e: Error) => {
        this.toasterService.pop('danger', 'Error Occurred', e.message);
      });
  }

}
