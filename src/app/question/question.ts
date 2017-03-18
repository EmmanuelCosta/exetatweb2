import { Response }        from '../question/response';

export class Question{

    index:number;
    libelle:string;
    item:string;
    imgPath:string;
    answer:Response[];

    constructor(){
      this.answer=new Array();
    }
}