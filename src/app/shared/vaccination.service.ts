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

// Eventuell in eigenes Service für location noch auslagern.
  getAllLocation():Observable<Array<Location>> {
    return this.http.get<Array<Location>>(`${this.api}/locations`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  remove(id: number):Observable<any> {
    return this.http.delete(`${this.api}/vaccinations/${id}`).pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  // Suchleist in home
  // Keine Fehlermeldung mehr nach hinzufügen von "<Array<" in 31
  getAllSearch(searchTerm: string):Observable<Array<Vaccination>> {
    return this.http.get<Array<Vaccination>>(`${this.api}/vaccinations/search/${searchTerm}`)
     .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create(vaccination: Vaccination):Observable<any> {
    return this.http.post(`${this.api}/vaccinations`, vaccination)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  update(vaccination: Vaccination):Observable<any> {
    return this.http
      .put(`${this.api}/vaccinations/${vaccination.id}`, vaccination)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error:Error | any){
    return throwError(error);
  }

}