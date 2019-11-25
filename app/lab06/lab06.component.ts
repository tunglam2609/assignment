import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectServiceService } from '../services/subject-service.service';
@Component({
  selector: 'app-lab06',
  templateUrl: './lab06.component.html',
  styleUrls: ['./lab06.component.css']
})
export class Lab06Component implements OnInit {
    allSubjects;// toan bo mon
  constructor(private route: Router,private subjectservice:SubjectServiceService) { }

  ngOnInit() {
    this.subjectservice.Subjects.subscribe(a=>this.allSubjects=a)
  }
  
}
