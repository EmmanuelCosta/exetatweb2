import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Location }               from '@angular/common';
import { Subject }        from '../subject/subject';
import { SubjectService } from '../subject/subject.service';
import { Item }        from './item';
import { ItemService } from './item.service';

@Component({
  moduleId: module.id,
  selector: 'item-form',
  templateUrl:'item-form.component.html',
  styleUrls:['../../assets/css/forms.css']
})
export class ItemFormComponent implements OnInit {
  public item:Item;
  public subjects: Subject[];
  public checkedSubjects:Subject[];
  public series:string[];
  public allowYears:number[];
  
   constructor(
    private itemService: ItemService,
     private subjectService: SubjectService,
    private route: ActivatedRoute,
     private router: Router,
    private location: Location
  ) {
   
  }

  getSubjects(): void {
    this.subjectService
        .getSubjects()
        .then(subjects => this.subjects = subjects);
  }

choosedSubjects(subject:Subject):void{
    
     if ((<HTMLInputElement>document.getElementById(subject._id)).checked === true) {
            this.checkedSubjects.push(subject);
        }
        else if ((<HTMLInputElement>document.getElementById(subject._id)).checked === false) {
            let indexx = this.checkedSubjects.indexOf(subject);
            this.checkedSubjects.splice(indexx,1)
            
        }
    
}
ngOnInit(): void {
    this.item=new Item();
    this.item.subject=[];
    this.getSubjects();
    this.checkedSubjects=[];

    this.series=["A","B","C","D"];
    this.allowYears=[];
    for(var i=1900;i<2018;i++){
        this.allowYears.push(i);
    }
  }

newItem():void{
    for( var subject of this.checkedSubjects){
        this.item.subject.push(subject._id);
    }
    console.log("===> "+this.item.year);
    this.itemService.newItem(this.item);   
    this.location.replaceState('/'); // clears browser history so they can't navigate with back button
    this.router.navigate(['/items']);
}

}