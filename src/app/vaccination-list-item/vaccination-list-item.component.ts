import { Component, Input, OnInit } from '@angular/core';
import { Vaccination } from '../shared/vaccination';

@Component({
  selector: 'a.bs-vaccination-list-item',
  templateUrl: './vaccination-list-item.component.html',
  styleUrls: [ './vaccination-list-item.component.css' ] 
})
export class VaccinationListItemComponent implements OnInit {
  @Input() vaccination : Vaccination;

  constructor() { }

  ngOnInit() {
  }

}