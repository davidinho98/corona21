import { Vaccination } from "./vaccination";
export { Vaccination } from "./vaccination";

export class Location {
  constructor(
    public id: number,
    public plz: number,
    public place: string,
    public street: string,
    public streetnumber: number,
    public info?: string, 
  ) {}
}