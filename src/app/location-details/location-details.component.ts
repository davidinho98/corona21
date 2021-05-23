import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { Location } from '../shared/location';
import { LocationFactory } from '../shared/location-factory';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'bs-location-details',
  templateUrl: './location-details.component.html'
})
export class LocationDetailsComponent implements OnInit {
  location: Location = LocationFactory.empty();

  constructor(private ls: LocationService, private route:ActivatedRoute,
  private router:Router, public authService:AuthenticationService) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ls.getSingle(+params['id']).subscribe(res => this.location = res);
  }

  removeLocation(){
    if(confirm("Wollen Sie diesen Ort wirklich löschen?")){
      this.ls.remove(this.location.id).subscribe(
        res => {
          this.router.navigate(['../'],{relativeTo:this.route});
        }
      );
    }
  }

}