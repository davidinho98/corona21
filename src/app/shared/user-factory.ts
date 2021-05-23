import { User } from './user';
import { Location } from './location';

export class UserFactory {

  static empty(): User {

    return new User(
      null,
      '',
      '',
      '',
      0,
      new Date (),
      '',
      '',
      false,
      false,
      false,
      null
      );
  }

  static fromObject(rawUser: any): User {
    return new User(
      rawUser.id,
      rawUser.firstName,
      rawUser.lastName,
      rawUser.password,
      rawUser.svnr,
      rawUser.bdate,
      rawUser.email,
      rawUser.phone,
      rawUser.vaccinated,
      rawUser.admin,
      rawUser.termin,
      rawUser.vaccination_id,
    );
  }

}