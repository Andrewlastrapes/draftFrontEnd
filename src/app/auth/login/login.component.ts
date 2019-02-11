import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login-service/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
    username: any;
    password: any;
    loggedIn: boolean = true;
    errMessage: any;
    loginError: boolean=false;
    successMessage: any;

    constructor(
        public router: Router,
        public loginServ: LoginService) { }


    loginUser(u, p) {

        if(!u || !p){
            this.loginError = true;
            this.errMessage = "Please type in username and password";
            return;
        }

        this.loginServ.login(u, p).then(res => {
          if(!res["token"]){
            this.loginError = true;
            this.errMessage = res["message"]
            console.log(this.errMessage)
            return;
          }
          this.successMessage = res["message"]
          console.log(res)
          this.router.navigate(["draft-board"], {queryParams: res})
        }
          
        )
       
        
    }



    ngOnInit() {
    }

}
