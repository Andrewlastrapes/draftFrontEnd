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
    validationMessage: any;

    constructor(
        public router: Router,
        public loginServ: LoginService) { }


    loginUser(u, p) {
        this.loginServ.login(u, p).then(res => {
          if(!res["token"]){
            this.validationMessage = res
            console.log(this.validationMessage)
            return;
          }
          console.log(res)
          this.validationMessage = res["message"]
          this.router.navigate(["draft-board", {id: res["user"]["username"]}])
        }
          
        )
       
        
    }



    ngOnInit() {
    }

}
