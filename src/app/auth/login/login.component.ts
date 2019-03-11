import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login-service/login.service";
import { ActiveUsersService } from "src/app/services/active-users-service/active-users.service";
import { AuthGuard } from "src/app/auth.guard";


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
    transfer: any;

    constructor(
        public router: Router,
        public loginServ: LoginService,
        public activeUser: ActiveUsersService,
        public auth: AuthGuard) { }


    loginUser(u, p) {

        if(!u || !p){
            this.loginError = true;
            this.errMessage = "Please enter username and password";
            return;
        }

        this.loginServ.login(u, p).then(res => {
          if(!res["token"]){
            this.loginError = true;
            this.errMessage = "username/password incorrect"
            console.log(this.errMessage)
            return;
          }
          this.successMessage = res["message"]
          this.transfer = res;
          this.auth.canActivate(this.transfer , this.transfer)
          this.router.navigate(["draft-board"], {queryParams: res})
        }
          
        )
       
        
    }



    ngOnInit() {
    }

}
