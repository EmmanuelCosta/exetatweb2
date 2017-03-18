import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Location }               from '@angular/common';
import { Section }        from './section';
import { SectionService } from './section.service';

@Component({
  moduleId: module.id,
  selector: 'section-form',
  templateUrl:'section-form.component.html',
  styleUrls:['../../assets/css/forms.css']
})
export class SectionFormComponent implements OnInit {
  public section:Section;

  
   constructor(
    private sectionService: SectionService,
    private route: ActivatedRoute,
     private router: Router,
    private location: Location
  ) {
   
  }
ngOnInit(): void {
    this.section=new Section();
  }

newSection():void{
this.sectionService.newSection(this.section);
this.location.replaceState('/'); // clears browser history so they can't navigate with back button
this.router.navigate(['/sections']);
}
  onSubmit() {
    
   this.section.name+="register";
   
   }
}