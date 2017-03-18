import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SectionsComponent } from './section/sections.component';
import { SectionFormComponent } from './section/section-form.component';
import { SubjectsComponent } from './subject/subjects.component';
import { SubjectFormComponent } from './subject/subject-form.component';
import { ItemsComponent } from './item/items.component';
import { ItemFormComponent } from './item/item-form.component';
import { QuestionService }   from './question/question.service';
//import { QuestionsComponent } from './question/questions.component';
import { QuestionFormComponent } from './question/question-form.component';



const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil',  component: AccueilComponent },
  { path: 'sections',  component: SectionsComponent },   
  { path: 'addSection',  component: SectionFormComponent },
  { path: 'subjects',  component: SubjectsComponent },
  { path: 'addSubject',  component: SubjectFormComponent },
   { path: 'items',  component: ItemsComponent },
  { path: 'addItem',  component: ItemFormComponent },
  //  { path: 'questions',  component: QuestionsComponent },
  { path: 'addQuestion/:item_id',  component: QuestionFormComponent },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}