import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule,JsonpModule  }    from '@angular/http';
//added for card
import {MdCardModule} from '@angular2-material/card';
import { AppComponent }  from './app.component';

import { HeaderDetailComponent } from './header/header-detail.component';
import { FooterDetailComponent } from './footer/footer-detail.component';

import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';

import { SectionService }   from './section/section.service';
import { SectionsComponent } from './section/sections.component';
import { SectionFormComponent } from './section/section-form.component';

import { SubjectService }   from './subject/subject.service';
import { SubjectsComponent } from './subject/subjects.component';
import { SubjectFormComponent } from './subject/subject-form.component';

import { ItemService }   from './item/item.service';
import { ItemsComponent } from './item/items.component';
import { ItemFormComponent } from './item/item-form.component';

import { QuestionService }   from './question/question.service';
//import { QuestionsComponent } from './question/questions.component';
import { QuestionFormComponent } from './question/question-form.component';



@NgModule({
  imports: [ BrowserModule,
             AppRoutingModule,
             HttpModule,
             JsonpModule ,
             MdCardModule,
             FormsModule],

  declarations: [ AppComponent,
                  HeaderDetailComponent,
                  FooterDetailComponent,
                  AccueilComponent,
                  SectionsComponent,
                  SectionFormComponent,
                  SubjectsComponent,
                  SubjectFormComponent,
                  ItemsComponent,
                  ItemFormComponent,
                  QuestionFormComponent
                  ],
  providers: [ SectionService,
               SubjectService,
                ItemService,
                QuestionService],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
