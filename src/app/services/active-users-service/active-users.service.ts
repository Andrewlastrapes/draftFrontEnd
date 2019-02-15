import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from "../message-service/message.service";

@Injectable({
  providedIn: 'root'
})
export class ActiveUsersService {

  public loggedInStatus: boolean=false;

  constructor(
    private http: HttpClient,
    public messageService: MessageService) { }

  getAllActiveUsers(){
    return this.http.get("http://localhost:3010/user/get-users")
    .pipe(
      catchError(this.handleError('Get Signed-in Users', []))
    );
  }



  postActiveUser(u, type){
    console.log("in post active service")
    if(type === "init"){
      return this.http.post("http://localhost:3010/user/set-initial-user", u).pipe(
        catchError(this.handleError('Post Active User', []))
      );
    } else {
      console.log(u)
      return this.http.post("http://localhost:3010/user/set-active-user", u).pipe(
      catchError(this.handleError('Post Active User', []))
    );
    }
  } 

  getActiveUser(){
    return this.http.get("http://localhost:3010/user/get-active-user").pipe(
      catchError(this.handleError('Post Active User', []))
    );
  }

  setLoggedIn(value){
    return value
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 
  /** Log a HeroService message with the MessageService */
 

}
