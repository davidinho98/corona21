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

}