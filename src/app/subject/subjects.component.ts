import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Subject }                from './subject';
import { SubjectService }         from './subject.service';

@Component({
  moduleId: module.id,
  selector: 'subjects',
  templateUrl: 'subjects.component.html'
})

export class SubjectsComponent implements OnInit {
  subjects: Subject[];
  selectedsubject: Subject;
  constructor(
    private subjectService: SubjectService,
    private router: Router) { }
  getSubjects(): void {
    this.subjectService
        .getSubjects()
        .then(subjects => this.subjects = subjects);
  }

  ngOnInit(): void {
    this.getSubjects();
  }

  onSelect(subject: Subject): void {
    this.selectedsubject = subject;
  }
}