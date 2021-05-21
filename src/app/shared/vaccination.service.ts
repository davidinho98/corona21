import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Vaccination, Location, User } from './vaccination';

@Injectable()
export class VaccinationService {

  private api = "https://corona21.s1810456013.student.kwmhgb.at/api";

  constructor(private http:HttpClient) { 
  }

  getAll():Observable<Array<Vaccination>> {
    return this.http.get<Array<Vaccination>>(`${this.api}/vaccinations`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle(id: number):Observable<Vaccination> {
    return this.http.get<Vaccination>(`${this.api}/vaccinations/${id}`).pipe(retry(3))
    .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error:Error | any){
    return throwError(error);
  }

}