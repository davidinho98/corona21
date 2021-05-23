import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccination, Location } from '../shared/location';

@Component({
  selector: 'bs-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) {}

  // nicht mehr relevant - erster Versuch, aber die Suche macht nur nach Ort Sinn.
  vaccinationSelected(vaccination:Vaccination){
    this.router.navigate(['../vaccinations',vaccination.id],{relativeTo:this.route})
  }

  locationSelected(location: Location){
    this.router.navigate(['../locations', location.id], {relativeTo:this.route});
  }

  ngOnInit() {
  }

}