export class Task {
  constructor(
    public title: string,
    public dueDate: string,
    public finished: boolean,
    public ownedBy?: string,
    public finishDate?: string
  ) { }

}
