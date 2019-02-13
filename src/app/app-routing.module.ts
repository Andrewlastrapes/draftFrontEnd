import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftBoardComponent } from "./components/draft-board/draft-board.component";

import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { WarningModalComponent } from './components/warning-modal/warning-modal.component';
import { AuthGuard } from "./auth.guard";



const routes: Routes = [

  {
    path: "draft-board",
    component: DraftBoardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: RegisterComponent
  },
  {
    path: "warning-modal",
    component: WarningModalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
