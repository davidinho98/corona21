import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, tap, switchMap } from 'rxjs/operators';
import { Vaccination } from '../shared/vaccination';
import { VaccinationService } from '../shared/vaccination.service';

@Component({
  selector: 'bs-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  keyup = new EventEmitter<string>();
  isLoading=false;
  foundVaccinations: Vaccination[] = [];
  @Output() vaccinationSelected = new EventEmitter<Vaccination>();

  constructor(private bs:VaccinationService){}

  ngOnInit() {
    this.keyup.pipe(filter(term => term!=""))
    .pipe(debounceTime(500))
    .pipe(distinctUntilChanged())
    .pipe(tap(() => this.isLoading = true))
    .pipe(switchMap(searchTerm => this.bs.getAllSearch(searchTerm)))
    .pipe(tap(() => this.isLoading = false))
    .subscribe(vaccinations => this.foundVaccinations = vaccinations);
  }

}