import { Injectable } from '@angular/core';

@Injectable()
 export class Config {
 private  API_URL: string

 constructor() {
    this.init();
   
 }
init(){
    var host=process.env.HTTP_HOST||"http:localhost"
    var port=process.env.HTTP_PORT||3000;
      this.API_URL=host+":"+port    
}
 getAPI_URL():string{
     return this.API_URL;
 }
};