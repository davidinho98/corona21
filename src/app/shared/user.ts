export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public password: string,
    public svnr: number,
    public bdate: Date,
    public email: string,
    public phone: string,
    public vaccinated: boolean,
    public admin: boolean,
    public termin: boolean,
    public vaccination_id: number
  ) {}
}