import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccination } from '../shared/location';

@Component({
  selector: 'bs-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) {}

  vaccinationSelected(vaccination:Vaccination){
    this.router.navigate(['../vaccinations',vaccination.id],{relativeTo:this.route})
  }

  ngOnInit() {
  }

}