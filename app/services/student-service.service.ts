import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  studentsRef: AngularFireList<any>;
  students: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.studentsRef = db.list('Students');
    this.students = this.studentsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
   }
  themHocSinh(item) {
    this.studentsRef.push(item);
  }
  luuDiem(key,item){
    this.studentsRef.update(key,{'marks':item})
  }
}
