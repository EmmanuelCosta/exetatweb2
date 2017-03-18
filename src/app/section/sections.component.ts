import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Section }                from './section';
import { SectionService }         from './section.service';

@Component({
  moduleId: module.id,
  selector: 'sections',
  templateUrl: 'sections.component.html'
})

export class SectionsComponent implements OnInit {
  sections: Section[];
  constructor(
    private sectionService: SectionService,
    private router: Router) { }
  getSections(): void {
    this.sectionService
        .getSections()
        .then(sections => this.sections = sections);
  }

  ngOnInit(): void {
    this.getSections();
  }
}