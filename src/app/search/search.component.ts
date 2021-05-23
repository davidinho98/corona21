import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, tap, switchMap } from 'rxjs/operators';
import { Vaccination, Location } from '../shared/location';
import { VaccinationService } from '../shared/vaccination.service';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'bs-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  keyup = new EventEmitter<string>();
  isLoading=false;
  foundVaccinations: Vaccination[] = [];
  foundLocations: Location[] = [];
  @Output() vaccinationSelected = new EventEmitter<Vaccination>();
  @Output() locationSelected = new EventEmitter<Location>();

  /*constructor(private vs:VaccinationService){}

  ngOnInit() {
    this.keyup.pipe(filter(term => term!=""))
    .pipe(debounceTime(500))
    .pipe(distinctUntilChanged())
    .pipe(tap(() => this.isLoading = true))
    .pipe(switchMap(searchTerm => this.vs.getAllSearch(searchTerm)))
    .pipe(tap(() => this.isLoading = false))
    .subscribe(vaccinations => this.foundVaccinations = vaccinations);
  }*/

  constructor(private ls:LocationService){}

  ngOnInit() {
    this.keyup.pipe(filter(term => term!=""))
    .pipe(debounceTime(500))
    .pipe(distinctUntilChanged())
    .pipe(tap(() => this.isLoading = true))
    .pipe(switchMap(searchTerm => this.ls.getAllSearch(searchTerm)))
    .pipe(tap(() => this.isLoading = false))
    .subscribe(locations => this.foundLocations = locations);
  }

}