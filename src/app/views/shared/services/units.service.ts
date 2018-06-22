import { Injectable } from '@angular/core';
import { DataService } from 'app/views/shared/services/data.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Deal } from 'app/views/shared/models/deal.model';

@Injectable()
export class UnitService extends DataService {

  constructor(db: AngularFireDatabase) {
    super('units', db);
  }

  async updateOwnership(key, owner: string, deal: Deal) {
    const unit$ = await this.get(key);
    const monthlyCost = this.monthlyCost(deal.startDate, deal.endDate, deal.value);
    unit$.update(
      {
        ownedBy: owner,
        occupied: true,
        totalCost: deal.value,
        startDate: deal.startDate,
        endDate: deal.endDate,
        monthlyCost: monthlyCost
      }
    )
  }

  monthlyCost(start, end, price) {
    const length = this.getGetTimeElapsed(start, end);
    return price / (length + 1);
  }

  private getGetTimeElapsed(start: string, end: string) {
    // Set the unit values in milliseconds.
    const msecPerMinute = 1000 * 60;
    const msecPerHour = msecPerMinute * 60;
    const msecPerDay = msecPerHour * 24;
    const msecPerMonth = msecPerDay * 30;

    // Set a date and get the milliseconds
    const startMsec = new Date(start).getTime();
    const endMsec = new Date(end).getTime();

    // Get the difference in milliseconds.
    let interval = endMsec - startMsec;

    // Calculate month
    const months = Math.floor(interval / msecPerMonth);
    interval -= (months * msecPerMonth);

    // Calculate how many days the interval contains. Subtract that
    // many days from the interval to determine the remainder.
    const days = Math.floor(interval / msecPerDay );
    interval = interval - (days * msecPerDay );

    // Display the result.
    console.log(months + ' months, ' + days + ' days, ');

    return months;
  }


}
