import { Injectable } from '@angular/core';
import { Headers, Http,URLSearchParams  } from '@angular/http';
import { Item } from './Item';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService{

      private EXETATAPI="http://localhost:3300";
    

      constructor(private http: Http) { 
      }
      
    getItems(): Promise<Item[]> {
    return this.http.get(this.EXETATAPI+"/items")
               .toPromise()
               .then(response => response.json() as Item[])
               .catch(this.handleError);
  }

  newItem(item:Item):void{
    let headers= new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    let itemJson = JSON.stringify(item); 
    let body = new URLSearchParams();
    body.set("item", itemJson);
    
    this.http.post(this.EXETATAPI+"/item",body.toString(),{headers:headers})
    .toPromise()
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}