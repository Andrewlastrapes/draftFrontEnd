import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService{
    constructor(public http: HttpClient){}

    registerUserService(username, password){
        let userData = {
            username: username,
            password: password
        }
       return this.http.post("http://localhost:3010/user/register", userData).toPromise()
    }

}