import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment"



@Injectable()
export class GolfersService {
  
  baseUrl = environment.baseUrl

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
    return this.http.post(this.baseUrl + "/golfers/post", golfers)
  }

  returnGolfers(){
    return this.http.get(this.baseUrl + "/golfers/post")
  }

  removeDraftedGolfer(golfer){
    return this.http.post(this.baseUrl + "/golfers/remove-drafted", golfer)
  }



}
