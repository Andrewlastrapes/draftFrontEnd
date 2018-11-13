import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActiveUsersService {

  constructor(private http: HttpClient) { }

  getAllActiveUsers(){
    return this.http.get("http://localhost:3010/active-users").toPromise();
  }

}
