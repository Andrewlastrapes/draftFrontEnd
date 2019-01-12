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
            console.log(res)
          if(!res["token"]){
            this.loginError = true;
            this.errMessage = res["message"]
            console.log(this.errMessage)
            return;
          }
          console.log(res)
          this.successMessage = res["message"]
          this.router.navigate(["draft-board", {id: res["user"]["username"]}])
        }
          
        )
       
        
    }



    ngOnInit() {
    }

}
