import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  postToDB(golfer, user){
    let payload = {
      user: user,
      golfer: golfer
    }
    console.log(payload)
     this.http.post("http://localhost:3010/post", payload).toPromise()
  }

  getUsers(){
    return this.http.get("http://localhost:3010/user/register").toPromise()
  }

}
