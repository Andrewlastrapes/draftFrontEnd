import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ActiveUsersService } from './services/active-users-service/active-users.service';



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

constructor(private activeUser: ActiveUsersService){
    console.log()
}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(next)
     if(next["queryParams"]["token"]){
       return true;
     } 
     return false;
  }
}
