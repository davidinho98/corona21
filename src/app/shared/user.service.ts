import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import { Vaccination, Location, User } from './vaccination';
import { User } from './user';

@Injectable()
export class UserService {

  private api = "https://corona21.s1810456013.student.kwmhgb.at/api";

  constructor(private http:HttpClient) { 
  }

  getAll():Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.api}/users`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle(id: number):Observable<User> {
    return this.http.get<User>(`${this.api}/users/${id}`).pipe(retry(3))
    .pipe(catchError(this.errorHandler));
  }

  remove(id: number):Observable<any> {
    return this.http.delete(`${this.api}/users/${id}`).pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getAllSearch(searchTerm: string):Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.api}/users/search/${searchTerm}`)
     .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create(user: User):Observable<any> {
    return this.http.post(`${this.api}/users`, user)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  update(user: User):Observable<any> {
    return this.http
      .put(`${this.api}/users/${user.id}`, user)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error:Error | any){
    return throwError(error);
  }
  
}