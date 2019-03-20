import { Component, OnInit } from "@angular/core";
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
    activeUsers: any;

    constructor(
        public router: Router,
        public loginServ: LoginService,
        public activeUser: ActiveUsersService,
        public auth: AuthGuard) { }


    numberOfActiveUsers(){
        this.activeUser.getAllActiveUsers().subscribe(data => {
            this.activeUsers = data
        })
    }


    loginUser(u, p) {
        console.log(this.activeUsers["data"].length)

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
            console.log(res)
            return;
          }
          if(this.activeUsers["data"].length > 8){
              this.loginError = true;
              this.errMessage = "Sorry, the draft has already begun"
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
        this.numberOfActiveUsers()
    }

}
