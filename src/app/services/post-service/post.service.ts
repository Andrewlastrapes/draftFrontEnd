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
  

  getUsers(){
    return this.http.get("http://localhost:3010/user/register")
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
