export class Subject{
  _id:string;
  name:string;
  section:string[];
  item:[
        {
          id:string;
          serie:string;
          year:number
        }
      ]
 }