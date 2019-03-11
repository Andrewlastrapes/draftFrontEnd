import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from "../message-service/message.service";
import { environment } from "../../../environments/environment"
import { Observable, of } from 'rxjs';

@Injectable()
export class PostService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    public messageService: MessageService
    ) { }

  postToDB(golfer, user){
    let payload = {
      user: user,
      golfer: golfer
    }  

    return this.http.post(this.baseUrl + "/post", payload)
    .pipe(
      tap(_ => this.log()),
      catchError(this.handleError('addGolferUser'))
    )
   
  }

  postActiveUser(u){
    return this.http.post(this.baseUrl + "/post/update-active", u).pipe(
      tap(_ => this.log()),
      catchError(this.handleError('updatedActiveUser'))
    )
  }

  updateTurn(bool){
    let payload = {
      b: bool
    }
    return this.http.post(this.baseUrl + "/post/update-turn", payload).pipe(
      tap(_ => this.log()),
      catchError(this.handleError('updateTurn'))
    )
  }

  initiateTurn(){
    return this.http.post(this.baseUrl + "/post/initate-turn", "").pipe(
      tap(_ => this.log()),
      catchError(this.handleError('initiate-turn'))
    )
  }
  
  

  getUsers(){
    return this.http.get(this.baseUrl + "/user/register")
  }

  getTurn(){
    console.log("In get turn")
    return this.http.get(this.baseUrl + "/post/get-turn")
  }

  draftComplete(){
    return this.http.post(this.baseUrl + "/post/draft-completed", true)
  }

  getDraftComplete(){
    return this.http.get(this.baseUrl + "/post/draft-completed")
  }

  draftStart(){
    return this.http.post(this.baseUrl + "/post/draft-started", "")
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
