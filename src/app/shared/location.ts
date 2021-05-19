import { Vaccination } from "./vaccination";
export { Vaccination } from "./vaccination";

export class Location {
  constructor(
    public id: number,
    public plz: string,
    public place: string,
    public street: number,
    public streetnumber: string,
    public info?: string, 
  ) {}
}