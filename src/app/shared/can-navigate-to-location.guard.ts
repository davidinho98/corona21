import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class CanNavigateToLocationGuard implements CanActivate {

  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
    if(this.authService.isLoggedIn()){
      return true;
    } else {
      window.alert("Sie müssen eingeloggt sein, um den Adminbereich nutzen zu können!");
      this.router.navigate(["../"],{relativeTo:this.route});
      return false;
    }
  }
}
