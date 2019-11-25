import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../services/student-service.service';
@Component({
  selector: 'app-lab12',
  templateUrl: './lab12.component.html',
  styleUrls: ['./lab12.component.css']
})
export class Lab12Component implements OnInit {

  newStudent = {
    birthday: new Date().toISOString().substring(0, 10),
    email: null,
    fullname: null,
    gender: null,
    marks: null,
    password: null,
    schoolfee: null,
    username: null, 
  }

  constructor(private route: Router,private studentservice:StudentServiceService) { }

  ngOnInit() {
  }
  dangky(){
    this.studentservice.themHocSinh(this.newStudent);
    alert("Dang ky thanh cong");
    this.newStudent = {
      birthday: new Date().toISOString().substring(0, 10),
      email: null,
      fullname: null,
      gender: null,
      marks: null,
      password: null,
      schoolfee: null,
      username: null, 
    }
  }
}
