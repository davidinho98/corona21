import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { Vaccination } from '../shared/vaccination';
import { VaccinationFactory } from '../shared/vaccination-factory';
import { VaccinationService } from '../shared/vaccination.service';

@Component({
  selector: 'bs-vaccination-details',
  templateUrl: './vaccination-details.component.html'
})
export class VaccinationDetailsComponent implements OnInit {
  vaccination : Vaccination = VaccinationFactory.empty();

  constructor(private bs: VaccinationService, private route:ActivatedRoute,
  private router:Router, public authService:AuthenticationService) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.bs.getSingle(+params['id']).subscribe(res => this.vaccination = res);
  }

  removeVaccination(){
    if(confirm("Wollen Sie die Impfung wirklich löschen?")){
      this.bs.remove(this.vaccination.id).subscribe(
        res => {
          this.router.navigate(['../'],{relativeTo:this.route});
        }
      );
    }
  }

}