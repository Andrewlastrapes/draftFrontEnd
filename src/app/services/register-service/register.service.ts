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
       return this.http.post("https://stormy-hollows-91406.herokuapp.com/user/register", userData).toPromise()
    }

}