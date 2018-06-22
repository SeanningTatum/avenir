export class Deal {
  constructor(
    public name: string,
    public value: number,
    public milestone: string,
    public ownedBy: string,
    public startDate?: string,
    public endDate?: string
  ) { }
}
