import { Injectable } from '@angular/core';
import { Vaccination, Location, User } from './vaccination';

@Injectable()
export class VaccinationService {

  private vaccinations: Vaccination[];

  constructor() { 

  this.vaccinations = [
      new Vaccination(
      1,
      new Date (2021-5-27),
      new Date (2021-5-27),
      new Date(2021-5-27),
      13,
      1,
        {id: 1, 
        plz: 5656, 
        place: 'House Frey', 
        street: 'Lärchenweg', 
        streetnumber: 33, 
        info: 'Test'},
          [{id: 0, 
            firstName: 'Mike', 
            lastName: 'Baratheon', 
            password: 'test', 
            svnr: 0,
            bdate: new Date (1997-12-16),  
            email: 'm.bara@gmx.at', 
            phone: '07675849359344', 
            vaccinated: false, 
            admin: false,
            termin: false, 
            vaccination_id: 1}]
      )
    ];

  }

  getAll(){
    return this.vaccinations;
  }

}