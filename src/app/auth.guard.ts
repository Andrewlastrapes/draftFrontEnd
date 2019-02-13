import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ActiveUsersService } from './services/active-users-service/active-users.service';



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

constructor(private activeUser: ActiveUsersService){

}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     console.log(next)
     let access = next["token"] ? next["token"] : next["queryParams"]["token"]
     if(access){
       return true;
     } 
     return false;
  }
}
