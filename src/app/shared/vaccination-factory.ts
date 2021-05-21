import { User } from './user';
import { Vaccination } from './vaccination';

export class VaccinationFactory {

  static empty(): Vaccination {

    return new Vaccination(
      null,
      new Date(),
      new Date(),
      new Date(),
      0,
      0,
      { id: 0, 
        plz: 0, 
        place: '',
        street: '', 
        streetnumber: 0, 
        info: '' },
      [
        {
          id: 0,
          firstName: '',
          lastName: '',
          password: '',
          svnr: 0,
          bdate: new Date(),
          email: '',
          phone: '',
          vaccinated: false,
          admin: false,
          termin: false,
          vaccination_id: 0
        }
      ]);
  }

  static fromObject(rawVaccination: any): Vaccination {
    return new Vaccination(
      rawVaccination.id,
      typeof rawVaccination.date === 'string' ? new Date(rawVaccination.date)
        : rawVaccination.date,
      typeof rawVaccination.start === 'string' ? new Date(rawVaccination.start)
        : rawVaccination.start,
      typeof rawVaccination.end === 'string' ? new Date(rawVaccination.end)
        : rawVaccination.end,
      rawVaccination.amount,
      rawVaccination.location_id,
      rawVaccination.location,
      rawVaccination.users
    );
  }

}
