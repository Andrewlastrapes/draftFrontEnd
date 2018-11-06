import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DraftBoardComponent } from '../app/draft-board/draft-board.component';
import { PostService } from "./services/post-service/post.service"
import { GolfersService } from "./services/golfers-service/golfers.service"
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoginService } from '../app/services/login-service/login.service';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { RegisterService } from "./services/register-service/register.service";







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DraftBoardComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [PostService, GolfersService, LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
