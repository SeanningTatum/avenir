export class Unit {
  constructor(
    public occupied: boolean,
    public aircon: boolean,
    public blinds: boolean,
    public ownedBy: string,
    public totalCost?: number,
    public startDate?: string,
    public endDate?: string,
    public monthlyCost?: number
  ) {}
}
