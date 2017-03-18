import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Location }               from '@angular/common';
import { Subject }        from './subject';
import { SubjectService } from './subject.service';
import { Section }        from '../section/section';
import { SectionService } from '../section/section.service';

@Component({
  moduleId: module.id,
  selector: 'subject-form',
  templateUrl:'subject-form.component.html',
  styleUrls:['../../assets/css/forms.css']
})
export class SubjectFormComponent implements OnInit {
  public subject:Subject;
  public sections: Section[];
  public checkedSections:Section[];
  
   constructor(
    private subjectService: SubjectService,
     private sectionService: SectionService,
    private route: ActivatedRoute,
     private router: Router,
    private location: Location
  ) {
   
  }

  getSections(): void {
    this.sectionService
        .getSections()
        .then(sections => this.sections = sections);
  }

choosedSections(section:Section):void{
    
     if ((<HTMLInputElement>document.getElementById(section.name)).checked === true) {
            this.checkedSections.push(section);
        }
        else if ((<HTMLInputElement>document.getElementById(section.name)).checked === false) {
            let indexx = this.checkedSections.indexOf(section);
            this.checkedSections.splice(indexx,1)
            
        }
    
}
ngOnInit(): void {
    this.subject=new Subject();
    this.subject.section=[];
    this.getSections();
    this.checkedSections=[];
  }

newSubject():void{
    for( var section of this.checkedSections){
        this.subject.section.push(section._id);
    }
    this.subjectService.newSubject(this.subject);   
    this.location.replaceState('/'); // clears browser history so they can't navigate with back button
    this.router.navigate(['/subjects']);
}
  onSubmit() {
    
   this.subject.name+="register";
   
   }
}