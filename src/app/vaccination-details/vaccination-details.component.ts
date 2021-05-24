import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { Vaccination } from '../shared/vaccination';
import { VaccinationFactory } from '../shared/vaccination-factory';
import { VaccinationService } from '../shared/vaccination.service';
import { User } from '../shared/user';
import { UserFactory } from '../shared/user-factory';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'bs-vaccination-details',
  templateUrl: './vaccination-details.component.html',
  styleUrls: [ './vaccination-details.component.css' ]
})
export class VaccinationDetailsComponent implements OnInit {
  vaccination : Vaccination = VaccinationFactory.empty();
  //user: User = UserFactory.empty();
  activeUser: User;
  //@Output() showListEvent = new EventEmitter<any>();

  constructor(private vs: VaccinationService, private us: UserService, private route:ActivatedRoute,
  private router:Router, public authService:AuthenticationService) { }

  //showLocationList() {
    //this.showListEvent.emit();
  //}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.vs.getSingle(+params['id']).subscribe(res => this.vaccination = res);
    
  }

  removeVaccination(){
    if(confirm("Wollen Sie die Impfung wirklich löschen?")){
      this.vs.remove(this.vaccination.id).subscribe(
        res => {
          this.router.navigate(['../'],{relativeTo:this.route});
        }
      );
    }
  }

  fetchData() {
    const params = this.route.snapshot.params;
    console.log(+params['id']);
    this.vs.getSingle(+params['id']).subscribe(l => (this.vaccination = l));
    if (this.authService.isLoggedIn()) {
      this.us
        .getSingle(localStorage.userId)
        .subscribe(res => (this.activeUser = res));
    }
  }

  //Alter Versuch;
  newUserToVaccination() {
    //this.user.vaccination_id = this.vaccination.id;
    //this.us.update(this.user).subscribe(res => {});
  }

}