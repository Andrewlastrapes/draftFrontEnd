import { Component } from "@angular/core";
import { RegisterService } from "../../services/register-service/register.service";
import { Router } from '@angular/router';


@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})

export class RegisterComponent{

    registrationError: boolean=false;
    errMessage: any;

    constructor(
        public registerServ: RegisterService,
        public router: Router){


    }

    navToLogin(){
        this.router.navigate(["/login"]);
    }

    registerUser(username, password, passwordConfirm){
        if(passwordConfirm !== password){
            this.registrationError = true;
            this.errMessage = "Password and Password Confirmation do not match."
            return;
        }
        this.registerServ.registerUserService(username, password)
        .then((data) => {
            if(data["err"]){
                this.registrationError = true;
                this.errMessage = data["err"]
                return;
            }
            this.router.navigate(["/login"]);
        });
    }

}