import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftBoardComponent } from "./components/draft-board/draft-board.component";

import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";



const routes: Routes = [

  {
    path: "draft-board",
    component: DraftBoardComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
