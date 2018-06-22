import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Unit } from 'app/views/shared/models/unit.model';
import { UnitService } from 'app/views/shared/services/units.service';

@Component({
  selector: 'app-units-table',
  templateUrl: './units-table.component.html',
  styleUrls: ['./units-table.component.scss']
})
export class UnitsTableComponent implements OnInit {

  public data: Observable<Unit[]>;
  public filterQuery = '';
  public floorNumber: number;
  public floorLetter: string;
  public floors: number[] = [];
  public letters: string[] = [];
  showSpinner: Boolean = true;

  constructor(private unitService: UnitService) { }

  ngOnInit() {
    this.data = this.unitService.getAllWithKey();
    this.data.subscribe(() => this.showSpinner = false);
    this.initFloorsAndLetters();
  }

  changeQuery() {
    this.filterQuery = (+this.floorNumber || '') + (this.floorLetter || '');
  }

  // Data Table
  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.name.length;
  }

  private initFloorsAndLetters() {
    for (let x = 0; x < 23; x++) {
      if (x >= 9 && x < 22) this.floors.push(x);
      this.letters.push(String.fromCharCode(x + 65));
    }
  }
}
