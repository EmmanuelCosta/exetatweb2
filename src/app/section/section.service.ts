import { Injectable } from '@angular/core';
import { Headers, Http,URLSearchParams  } from '@angular/http';
import { Section } from './Section';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SectionService{

      private EXETATAPI="http://localhost:3300";
    // private getAllSectionUrl = 'http://localhost:3300/sections'; 
     //private createSectionUrl = 'http://localhost:3300/section'; 

      constructor(private http: Http) { 
      }
      
    getSections(): Promise<Section[]> {
    return this.http.get(this.EXETATAPI+"/sections")
               .toPromise()
               .then(response => response.json() as Section[])
               .catch(this.handleError);
  }

  newSection(section:Section):void{
    let headers= new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

   
    let sectionJson = JSON.stringify(section) ;
    let body = new URLSearchParams();
  //  console.log("-- "+sectionJson);
    body.set("section", sectionJson);
   // console.log("-- "+body.toString());
    this.http.post(this.EXETATAPI+"/section",body.toString(),{headers:headers})
    .toPromise()
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}