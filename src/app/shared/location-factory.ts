import { User } from './user';
import { Location } from './location';

export class LocationFactory {

  static empty(): Location {

    return new Location(
      null,
      0,
      '',
      '',
      0,
      ''
      );
  }

  static fromObject(rawLocation: any): Location {
    return new Location(
      rawLocation.id,
      rawLocation.plz,
      rawLocation.place,
      rawLocation.street,
      rawLocation.streetnumber,
      rawLocation.info
    );
  }

}
