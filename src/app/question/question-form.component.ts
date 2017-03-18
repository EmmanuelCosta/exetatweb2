import 'rxjs/add/operator/switchMap';
import { Component, OnInit,ElementRef }      from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Location }               from '@angular/common';
import { Question }        from '../question/question';
import { QuestionService } from '../question/question.service';
import { Item }        from '../item/item';
import { ItemService } from '../item/item.service';
import { Response }        from '../question/response';

@Component({
  moduleId: module.id,
  selector: 'question-form',
  templateUrl:'question-form.component.html',
  styleUrls:['../../assets/css/forms.css']
})

export class QuestionFormComponent implements OnInit {
  public question:Question;
  public item: Item[];
  public index:number;
  public answerNumber:number;

    constructor(
        private itemService: ItemService,
        private questionService: QuestionService,
        private route:ActivatedRoute,
        private router: Router,
        private location: Location,
        public element: ElementRef
    ) {
    
    }

    getIndex(itemId:string): void {
        this.questionService
            .getNextIndex(itemId)
            .then(index => this.index = index);
    }


    ngOnInit(): void {
        this.question=new Question();
    this.route.params.subscribe(params => {
            var id =   params['item_id'];

    this.question.item = id;
    
        this.getIndex(id);
        });
        
    }

    createRange(number:number):number[]{
    var items: number[] = [];
    for(var i = 0; i < number; i++){
        items.push(i);
    }
    return items;
    }

    setNumberOfAnswer(answerNumber:number):void{
        this.answerNumber=answerNumber;
        console.log( this.answerNumber);
    }

    newQuestion():void{
        this.question.index=this.index;
    
        this.setAnswer();

        for(var i = 0; i < this.answerNumber; i++){
            console.log(this.question.answer[i].libelle);
        }
         this.questionService.newQuestion(this.question);   
         this.location.replaceState('/'); // clears browser history so they can't navigate with back button
         this.router.navigate(['/items']);
    }

    setAnswer():void{
          var el = this.element.nativeElement;
        for(var i = 0; i < this.answerNumber; i++){
         var answerValue = el.querySelector('#answer'+i).value;
          var statusValue = el.querySelector('#status'+i).value;
          var response = new Response();
          response.status=statusValue;
          response.libelle=answerValue;

          this.question.answer.push(response);
         
        }

    }

}