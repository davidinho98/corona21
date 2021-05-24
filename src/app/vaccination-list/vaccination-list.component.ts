import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Vaccination, Location, User } from '../shared/vaccination';
import { VaccinationService } from '../shared/vaccination.service';

@Component({
  selector: 'bs-vaccination-list',
  templateUrl: './vaccination-list.component.html',
  styleUrls: [ './vaccination-list.component.css' ] 
})
export class VaccinationListComponent implements OnInit {

  @Output() showDetailsEvent = new EventEmitter<Vaccination>();

  constructor(private vs:VaccinationService) { }

  showDetails(vaccination:Vaccination){
      this.showDetailsEvent.emit(vaccination);
  }

  vaccinations: Vaccination[];

  ngOnInit() {
    this.vs.getAll().subscribe(res => this.vaccinations = res);
  }
}