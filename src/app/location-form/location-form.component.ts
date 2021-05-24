import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccination, Location } from '../shared/location';
import { VaccinationFactory } from '../shared/vaccination-factory';
import { VaccinationService } from '../shared/vaccination.service';
import { LocationService } from '../shared/location.service';
import { LocationFactory } from '../shared/location-factory';
import { LocationFormErrorMessages } from './location-form-error-messages';

@Component({
  selector: 'bs-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: [ './location-form.component.css' ]
})
export class LocationFormComponent implements OnInit {

  locationForm: FormGroup;
  location = LocationFactory.empty();
  isUpdatingLocation = false;
  errors:{[key:string]:string}={};
  //locations: Location[];
  //updateLocation: number;

  constructor(private fb:FormBuilder, private ls:LocationService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {

    const id = this.route.snapshot.params["id"];
    if(id){
      this.isUpdatingLocation = true;
      this.ls.getSingle(id).subscribe(location =>{
        this.location = location;
        this.initVaccination();
      });
    }
    this.initVaccination();
  }

  initVaccination(){
      //Formular bauen
      this.locationForm = this.fb.group({
        id: this.location.id,
        plz: this.location.plz,
        place: this.location.place,
        street: this.location.street,
        streetnumber: this.location.streetnumber,
        info: this.location.info
      });
      this.locationForm.statusChanges.subscribe(()=>{
        this.updateErrorMessages();
      }
      );
  }

  updateErrorMessages(){
    this.errors = {};
    for (const message of LocationFormErrorMessages){
      const control = this.locationForm.get(message.forControl);
      if(control && control.dirty && control.invalid && control.errors[message.forValidator] && !this.errors[message.forControl]){
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm(){
    console.log(this.locationForm.value);
    const newLocation:Location = LocationFactory.fromObject(this.locationForm.value);

  if (this.isUpdatingLocation){
    this.ls.update(newLocation).subscribe(res => {
      this.router.navigate(["../../locations",newLocation.id],
      {relativeTo:this.route});
    });
  } else {
    this.ls.create(newLocation).subscribe(res => {
      this.router.navigate(["../locations"],{relativeTo:this.route});
    });
  }
  }

}