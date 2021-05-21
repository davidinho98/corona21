import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccination } from '../shared/location';
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

  constructor(private fb:FormBuilder, private bs:VaccinationService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
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
      this.vaccinationForm = this.fb.group({
        amount: [this.vaccination.amount,Validators.required] 
      });
  }

  updateErrorMessages(){
    this.errors = {};
    for (const message of VaccinationFormErrorMessages){
      const control = this.vaccinationForm.get(message.forControl);
      if(control && control.dirty && control.invalid && control.errors[message.forValidator] && !this.errors[message.forControl]){
        
      }
    }
  }

}