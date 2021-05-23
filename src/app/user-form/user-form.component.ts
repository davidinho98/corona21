import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccination, Location } from '../shared/location';
import { VaccinationFactory } from '../shared/vaccination-factory';
import { VaccinationService } from '../shared/vaccination.service';
import { UserService } from '../shared/user.service';
import { UserFactory } from '../shared/user-factory';
import { UserFormErrorMessages } from './user-form-error-messages';
import { User } from '../shared/user';

@Component({
  selector: 'bs-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  user = UserFactory.empty();
  isUpdatingUser = false;
  errors:{[key:string]:string}={};
  //Zum hinzufügen der jeweiigen vaccination
  vaccination: Vaccination;

  constructor(private fb:FormBuilder, private vs:VaccinationService, private us:UserService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {

    const id = this.route.snapshot.params["id"];
    if(id){
      this.isUpdatingUser = true;
      this.vs.getSingle(id).subscribe(vaccination =>{
        this.vaccination = vaccination;
        this.initUser();
      });
    }
    this.initUser();
  }

  initUser(){
      //Formular bauen
      this.userForm = this.fb.group({
        id: this.user.id,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        password: this.user.password,
        svnr: this.user.svnr,
        bdate: this.user.bdate,
        email: this.user.email,
        phone: this.user.phone,
        vaccinated: this.user.vaccinated,
        admin: this.user.admin,
        termin: this.user.termin,
        vaccination_id: +this.route.snapshot.params['vaccination_id']
      });
      this.userForm.statusChanges.subscribe(()=>{
        this.updateErrorMessages();
      }
      );
  }

  updateErrorMessages(){
    this.errors = {};
    for (const message of UserFormErrorMessages){
      const control = this.userForm.get(message.forControl);
      if(control && control.dirty && control.invalid && control.errors[message.forValidator] && !this.errors[message.forControl]){
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm(){
    console.log(this.userForm.value);
    /*this.vaccinationForm.value.location = this.vaccinationForm.value.location.filter(
    )*/
    const newUser:User = UserFactory.fromObject(this.userForm.value);
  //just a hack
  
  if (this.isUpdatingUser){
    this.us.update(newUser).subscribe(res => {
      this.router.navigate(["../../vaccinations",newUser.id],
      {relativeTo:this.route});
    });
  } else {
    this.us.create(newUser).subscribe(res => {
      this.router.navigate(['../../vaccinations', this.route.snapshot.params['vaccination_id']], { relativeTo: this.route });
    });
  }
  }

}