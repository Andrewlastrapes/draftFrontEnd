import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from "../message-service/message.service";
 
import { Observable, of } from 'rxjs';

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient,
    public messageService: MessageService
    ) { }

  postToDB(golfer, user){
    let payload = {
      user: user,
      golfer: golfer
    }  

    return this.http.post("http://localhost:3010/post", payload)
    .pipe(
      tap(_ => this.log()),
      catchError(this.handleError('addGolferUser'))
    )
   
  }

  postActiveUser(u){
    return this.http.post("http://localhost:3010/post/update-active", u).pipe(
      tap(_ => this.log()),
      catchError(this.handleError('updatedActiveUser'))
    )
  }

  updateTurn(bool){
    let payload = {
      b: bool
    }
    return this.http.post("http://localhost:3010/post/update-turn", payload).pipe(
      tap(_ => this.log()),
      catchError(this.handleError('updateTurn'))
    )
  }

  initiateTurn(){
    return this.http.post("http://localhost:3010/post/initate-turn", "").pipe(
      tap(_ => this.log()),
      catchError(this.handleError('initiate-turn'))
    )
  }
  
  

  getUsers(){
    return this.http.get("http://localhost:3010/user/register")
  }

  getTurn(){
    console.log("In get turn")
    return this.http.get("http://localhost:3010/post/get-turn")
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

  private log() {
    // this.messageService.postingErrorMessage();
    console.log("asdfkjahsfd")
  }

}
