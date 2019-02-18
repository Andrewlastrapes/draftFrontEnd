import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from "../message-service/message.service";

@Injectable()
export class LoginService {

  constructor(
              private http: HttpClient,
              public messageService: MessageService) { }
  data: any = {}

  login(username, password){
    let enteredData = {
      username: username,
      password: password
    }
      return this.http.post("https://stormy-hollows-91406.herokuapp.com/user/login", enteredData).toPromise();
    }

    signOut(username){
      let data = {
        username: username
      }
      return this.http.post("https://stormy-hollows-91406.herokuapp.com/user/sign-out", data).pipe(
        tap(_ => this.log()),
        catchError(this.handleError('initiate-turn'))
      )
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); 
        return of(result as T);
      };
    }
  
    private log() {
      this.messageService.postingErrorMessage();
    }
 
   
  }

 