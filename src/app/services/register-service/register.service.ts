import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"

@Injectable()
export class RegisterService{
    baseUrl = environment.baseUrl

    constructor(public http: HttpClient){}
    
    registerUserService(username, password){
        let userData = {
            username: username,
            password: password
        }
       return this.http.post(this.baseUrl + "/user/register", userData).toPromise()
    }

}