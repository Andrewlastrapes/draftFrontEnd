import { Component } from "@angular/core";
import { RegisterService } from "../../services/register-service/register.service";
import { Router } from '@angular/router';
import { LoginComponent } from "../login/login.component";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})

export class RegisterComponent{

    constructor(
        public registerServ: RegisterService,
        public router: Router){

    }

    registerUser(username, password){
        this.registerServ.registerUserService(username, password);
        this.router.navigate(["/login"]);
        
    }

}