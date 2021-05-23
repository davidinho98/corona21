import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Location, Vaccination } from './location';

@Injectable()
export class LocationService {

  private api = "https://corona21.s1810456013.student.kwmhgb.at/api";

  constructor(private http:HttpClient) {}

  // Eventuell in eigenes Service für location noch auslagern.
  getAllLocation():Observable<Array<Location>> {
    return this.http.get<Array<Location>>(`${this.api}/locations`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

  //validator für die plz einer location
  check(plz:String):Observable<Boolean>{
    return this.http
    .get<Boolean>(`${this.api}/locations/checkplz/${plz}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getSingle(id: number):Observable<Location> {
    return this.http.get<Location>(`${this.api}/locations/${id}`).pipe(retry(3))
    .pipe(catchError(this.errorHandler));
  }

  remove(id: number):Observable<any> {
    return this.http.delete(`${this.api}/locations/${id}`).pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  //Array gehört weg nach dem .get
  getAllSearch(searchTerm: string):Observable<Array<Location>> {
    return this.http.get<Array<Location>>(`${this.api}/locations/search/${searchTerm}`)
     .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create(location: Location):Observable<any> {
    return this.http.post(`${this.api}/location`, location)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  update(location: Location):Observable<any> {
    return this.http
      .put(`${this.api}/locations/${location.id}`, location)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

}