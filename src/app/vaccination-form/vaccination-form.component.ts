import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccination, Location } from '../shared/location';
import { VaccinationFactory } from '../shared/vaccination-factory';
import { VaccinationService } from '../shared/vaccination.service';
import { VaccinationFormErrorMessages } from './vaccination-form-error-messages';

@Component({
  selector: 'app-vaccination-form',
  templateUrl: './vaccination-form.component.html'
})
export class VaccinationFormComponent implements OnInit {

  vaccinationForm: FormGroup;
  vaccination = VaccinationFactory.empty();
  isUpdatingVaccination = false;
  errors:{[key:string]:string}={};
  locations: Location[];
  updateLocation: number;

  constructor(private fb:FormBuilder, private bs:VaccinationService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {

    this.bs.getAllLocation().subscribe(res => (this.locations = res));

    const id = this.route.snapshot.params["id"];
    if(id){
      this.isUpdatingVaccination = true;
      this.bs.getSingle(id).subscribe(vaccination =>{
        this.vaccination = vaccination;
        this.initVaccination();
      });
    }
    this.initVaccination();
  }

  initVaccination(){
      //Formular bauen
      this.vaccination.location_id = this.updateLocation;
      this.vaccinationForm = this.fb.group({
        id: this.vaccination.id,
        date: this.vaccination.date,
        start: this.vaccination.start,
        end: this.vaccination.end,
        amount: [this.vaccination.amount,[ 
          Validators.required, 
          Validators.min(1), Validators.max(250)]],
        location_id: [this.vaccination.location_id]
      });
      this.vaccinationForm.statusChanges.subscribe(()=>{
        this.updateErrorMessages();
      }
      );
  }

  updateErrorMessages(){
    this.errors = {};
    for (const message of VaccinationFormErrorMessages){
      const control = this.vaccinationForm.get(message.forControl);
      if(control && control.dirty && control.invalid && control.errors[message.forValidator] && !this.errors[message.forControl]){
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm(){
    console.log(this.vaccinationForm.value);
    /*this.vaccinationForm.value.location = this.vaccinationForm.value.location.filter(
    )*/
    const Vaccination:Vaccination = VaccinationFactory.fromObject(this.vaccinationForm.value);
  
  //just a hack
  //updatedVaccination.location = this.vaccination.location

  if (this.isUpdatingVaccination){
    this.bs.update(this.vaccination).subscribe(res => {
      this.router.navigate(["../../vaccinations", this.vaccination.id],
      {relativeTo:this.route});
    });
  } else {
    this.bs.create(this.vaccination).subscribe(res => {
      this.router.navigate(["../../vaccinations"],{relativeTo:this.route});
    });
  }
  }

}