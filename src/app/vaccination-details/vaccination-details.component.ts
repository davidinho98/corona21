import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaccination } from '../shared/vaccination';
import { VaccinationService } from '../shared/vaccination.service';

@Component({
  selector: 'bs-vaccination-details',
  templateUrl: './vaccination-details.component.html'
})
export class VaccinationDetailsComponent implements OnInit {
  @Input() vaccination : Vaccination;
  @Output() showListEvent = new EventEmitter<any>();

  constructor(private bs: VaccinationService, private route:ActivatedRoute) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.vaccination = this.bs.getSingle(params['id']);
  }

  showVaccinationList(){
    this.showListEvent.emit();
  }

}