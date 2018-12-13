import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DraftBoardComponent } from './components/draft-board/draft-board.component';
import { PostService } from "./services/post-service/post.service"
import { GolfersService } from "./services/golfers-service/golfers.service"
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoginService } from '../app/services/login-service/login.service';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { RegisterService } from "./services/register-service/register.service";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { GolferDetailsComponent } from './components/golfer-details/golfer-details.component';
import { WarningModalComponent } from './components/warning-modal/warning-modal.component';
import { MessageComponent } from './components/message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DraftBoardComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent,
    GolferDetailsComponent,
    WarningModalComponent,
    MessageComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [PostService, GolfersService, LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
