import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  SubjectsRef: AngularFireList<any>;
  Subjects: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.SubjectsRef = db.list('Subjects');
    this.Subjects = this.SubjectsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
   }
}
