import { Injectable } from '@angular/core';
import { Headers, Http,URLSearchParams  } from '@angular/http';
import { Question } from './Question';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionService{

      private EXETATAPI="http://localhost:3300";
    

      constructor(private http: Http) { 
      }
      
    getQuestions(): Promise<Question[]> {
    return this.http.get(this.EXETATAPI+"/questions")
               .toPromise()
               .then(response => response.json() as Question[])
               .catch(this.handleError);
  }

getNextIndex(itemId:string):Promise<number>{
 return this.http.get(this.EXETATAPI+"/question/getNextIndex/"+itemId)
               .toPromise()
               .then(response => response.json().next as Question[])
               .catch(this.handleError);
}
  newQuestion(question:Question):void{
    let headers= new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    let questionJson = JSON.stringify(question); 
    let body = new URLSearchParams();
    body.set("question", questionJson);
    console.log(body.toString());
    this.http.post(this.EXETATAPI+"/question",body.toString(),{headers:headers})
    .toPromise()
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}