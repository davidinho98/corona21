import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { Location } from '../shared/location';
import { LocationFactory } from '../shared/location-factory';
import { LocationService } from '../shared/location.service';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'bs-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: [ './location-details.component.css' ]
})
export class LocationDetailsComponent implements OnInit {
  location: Location = LocationFactory.empty();
  activeUser: User;

  constructor(private ls: LocationService, private us:UserService, private route:ActivatedRoute,
  private router:Router, public authService:AuthenticationService) { }

   isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ls.getSingle(+params['id']).subscribe(res => this.location = res);
    this.forAdmin();
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

  forAdmin() {
    const params = this.route.snapshot.params;
    //console.log(+params['id']);
    this.ls.getSingle(+params['id']).subscribe(l => (this.location = l));
    if (this.authService.isLoggedIn()) {
      this.us
        .getSingle(localStorage.userId)
        .subscribe(res => (this.activeUser = res));
    }
  }

}