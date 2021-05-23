import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Vaccination, User} from '../shared/vaccination';
import { LocationService } from '../shared/location.service';
import { Location } from "../shared/location";

@Component({
  selector: 'bs-location-list',
  templateUrl: './location-list.component.html'
})
export class LocationListComponent implements OnInit {

  //@Output() showDetailsEvent = new EventEmitter<Location>();

  constructor(private ls:LocationService) { }

  /*showDetails(location:Location){
      this.showDetailsEvent.emit(location);
  }*/

  locations: Location[];

  ngOnInit() {
    this.ls.getAllLocation().subscribe(res => this.locations = res);
  }
}