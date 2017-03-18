import { Injectable } from '@angular/core';
import { Headers, Http,URLSearchParams  } from '@angular/http';
import { Subject } from './Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SubjectService{

      private EXETATAPI="http://localhost:3300";
    

      constructor(private http: Http) { 
      }
      
    getSubjects(): Promise<Subject[]> {
    return this.http.get(this.EXETATAPI+"/subjects")
               .toPromise()
               .then(response => response.json() as Subject[])
               .catch(this.handleError);
  }

  newSubject(subject:Subject):void{
    let headers= new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

   
    let subjectJson = JSON.stringify(subject) ;
    let body = new URLSearchParams();
  //  console.log("-- "+subjectJson);
    body.set("subject", subjectJson);
   // console.log("-- "+body.toString());
    this.http.post(this.EXETATAPI+"/subject",body.toString(),{headers:headers})
    .toPromise()
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}