import { Component, OnInit } from '@angular/core';
import { Vaccination, Location, User } from '../shared/vaccination';

@Component({
  selector: 'bs-vaccination-list',
  templateUrl: './vaccination-list.component.html'
})
export class VaccinationListComponent implements OnInit {

  constructor() { }

  vaccinations: Vaccination[];

  ngOnInit() {
    this.vaccinations = [
      new Vaccination(
      1,
      new Date (),
      new Date (),
      new Date(),
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
            bdate: new Date (),  
            email: 'm.bara@gmx.at', 
            phone: '07675849359344', 
            vaccinated: false, 
            admin: false,
            termin: false, 
            vaccination_id: 1}]
      )
    ];
  }
}