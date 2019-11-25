import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../services/student-service.service';
@Component({
  selector: 'app-lab13',
  templateUrl: './lab13.component.html',
  styleUrls: ['./lab13.component.css']
})
export class Lab13Component implements OnInit {
  allStudent;
  user = {
    username: null,
    email: null,
    password:null
  };
  constructor(private route: Router,private studentservice:StudentServiceService) { }

  ngOnInit() {
    this.studentservice.studentsRef.valueChanges().subscribe(a=>this.allStudent=a)
  }
  isShowPW=false
  findPW() {
    const accountExist = this.allStudent.filter(p => {
      if (p.username == this.user.username)
        return p;
    });
    if (accountExist[0] == null) {
      alert("Tên đăng nhập không đúng.");
    }
    else if (this.user.email != accountExist[0].email) {
      alert("Email không đúng.");
    }
    else {
      this.user.password = accountExist[0].password
      this.isShowPW = true;
    }
  }
}
