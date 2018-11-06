import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  data: any = {}

  login(username, password){
    let enteredData = {
      username: username,
      password: password
    }
      return this.http.post("http://localhost:3010/user/login", enteredData).toPromise()
    }
     
   
  }

