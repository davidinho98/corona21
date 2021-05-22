import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LocationService } from "./location.service";

export class LocationValidators {

  static plzFormat(control: FormControl):{[error:string]:any}{
    if(!control.value){
      return null;
    }
    //const isolatedNumbers = control.value.replace(/-/g,'');
    //return isolatedNumbers;
  }

  // Muss, wenn angewandt werden soll noch später im .ts so integriert werden:
  // plz: [
  // this.location.plz, [
  // Validators.required,
  // LocationValidators.plzFormat],
  // this.isUpdatingLocation?null:LocationValidators.plzExists(this.ls)
  // ],
  // Error messages müssten auch noch geändert werden, siehe form-error-messages aus // übung
  static plzExists(ls : LocationService) {
    return function(control: FormControl): Observable<{[error: string]: any}> {
      return ls.check(control.value)
      .pipe(map(exists => !exists ? null : {plzExists: {valid: false}}));
      }
    }

}