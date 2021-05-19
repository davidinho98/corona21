//import { User } from "./user";
//export { User } from "./user";
//import { Location } from './location';
//export { Location } from './location';

export class Vaccination {
  constructor(
    public id: number,
    public date: Date,
    public start: Date,
    public end: Date,
    public amount: number,
    public location_id: number,
    //public location: Location,
    //public users?: User[]
  ) {}
}