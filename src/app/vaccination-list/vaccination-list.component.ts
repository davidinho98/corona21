import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Vaccination, Location, User } from '../shared/vaccination';

@Component({
  selector: 'bs-vaccination-list',
  templateUrl: './vaccination-list.component.html'
})
export class VaccinationListComponent implements OnInit {

  @Output() showDetailsEvent = new EventEmitter<Vaccination>();

  constructor() { }

  showDetails(vaccination:Vaccination){
      this.showDetailsEvent.emit(vaccination);
  }

  vaccinations: Vaccination[];

  ngOnInit() {
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
}