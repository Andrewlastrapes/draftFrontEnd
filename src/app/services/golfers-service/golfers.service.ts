import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable()
export class GolfersService {
  

  constructor(private http: HttpClient) { }

  
  

  getGolfers(){

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
              'Ocp-Apim-Subscription-Key': 'a589840eab4f4d37919cb79a20d4bf9d'
})
    }

   return this.http.get("https://api.fantasydata.net/golf/v2/{JSON}/PlayerSeasonStats/{2018}?",  httpOptions)
  }


  postGolfers(golfers){
    console.log(golfers)
    return this.http.post("https://stormy-hollows-91406.herokuapp.com/golfers/post", golfers)
  }

  returnGolfers(){
    return this.http.get("https://stormy-hollows-91406.herokuapp.com/golfers/post")
  }

  removeDraftedGolfer(golfer){
    console.log(golfer)
    return this.http.post("https://stormy-hollows-91406.herokuapp.com/golfers/remove-drafted", golfer)
  }



}
