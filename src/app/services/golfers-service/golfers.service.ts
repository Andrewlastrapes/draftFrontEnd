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

   return this.http.get("https://api.fantasydata.net/golf/v2/{JSON}/PlayerSeasonStats/{2018}?",  httpOptions).toPromise()
  }


  postGolfers(golfers){
    console.log(golfers)
    this.http.post("http://localhost:3010/golfers/post", golfers).toPromise()
  }

  returnGolfers(){
    return this.http.get("http://localhost:3010/golfers/post").toPromise()
  }

  removeDraftedGolfer(golfer){
    console.log(golfer)
    return this.http.post("http://localhost:3010/golfers/remove-drafted", golfer).toPromise();
  }



}
