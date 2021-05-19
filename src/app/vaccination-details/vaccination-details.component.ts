import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vaccination } from '../shared/vaccination';

@Component({
  selector: 'bs-vaccination-details',
  templateUrl: './vaccination-details.component.html'
})
export class VaccinationDetailsComponent implements OnInit {
  @Input() vaccination : Vaccination;
  @Output() showListEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  showVaccinationList(){
    this.showListEvent.emit();
  }

}