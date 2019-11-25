import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../services/student-service.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-lab11',
  templateUrl: './lab11.component.html',
  styleUrls: ['./lab11.component.css']
})
export class Lab11Component implements OnInit {
  allStudent;
  user = {
    username: null,
    matkhau: null
  };
  userLogin;
  constructor(private route: Router,private studentservice:StudentServiceService) { }

  ngOnInit() {
    this.studentservice.studentsRef.snapshotChanges().pipe(map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
    ).subscribe(a => {
      this.allStudent = a
    })
    setTimeout(() => {
      console.log(this.allStudent);
    }, 2000);
    this.getlocalstorage();
  }
  getlocalstorage() {
    let local = JSON.parse(localStorage.getItem('login'));
    if (local == null) {
      this.userLogin;
    } else {
      this.userLogin = local;
    }
  }
  logIn(user) {
    // check username in allStudents, if don't exist return null.
    const accountExist = this.allStudent.filter(p => {
      if (p.username == user.username)
        return p;
    });
    // check username & password
    if (accountExist[0] == null) {
      alert("Tên đăng nhập sai.");
    } else if (user.matkhau != accountExist[0].password) {
      alert("Mật khẩu sai.");
    } else {
      this.userLogin=accountExist;
      localStorage.setItem('login', JSON.stringify(this.userLogin));
      this.route.navigateByUrl('');
      alert("Đăng nhập thành công.");
    }
  }
}
