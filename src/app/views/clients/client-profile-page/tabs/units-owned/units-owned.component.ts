import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Unit } from 'app/views/shared/models/unit.model';
import { UnitService } from 'app/views/shared/services/units.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-units-owned',
  templateUrl: 'units-owned.component.html'
})

export class UnitsOwnedComponent implements OnInit {
  unitsOwned$: Observable<Unit[]>;
  loading: boolean = true;

  constructor(private unitsService: UnitService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const key = this.activatedRoute.parent.parent.snapshot.paramMap.get('key');
    this.unitsOwned$ = this.unitsService.getBasedOnUser(key);
    this.unitsOwned$.subscribe(units => this.loading = false);
  }
}
