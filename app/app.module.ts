import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { Lab06Component } from './lab06/lab06.component';
import { Lab07Component } from './lab07/lab07.component';
import { Lab08Component } from './lab08/lab08.component';
import { Lab09Component } from './lab09/lab09.component';
import { Lab10Component } from './lab10/lab10.component';
import { Lab11Component } from './lab11/lab11.component';
import { Lab12Component } from './lab12/lab12.component';
import { Lab13Component } from './lab13/lab13.component';
import { TestingComponent } from './testing/testing.component';
@NgModule({
  declarations: [
    AppComponent,
    Lab06Component,
    Lab07Component,
    Lab08Component,
    Lab09Component,
    Lab10Component,
    Lab11Component,
    Lab12Component,
    Lab13Component,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([

      {path: '', component: Lab06Component },
      {path: 'gioithieu', component: Lab07Component },
      {path: 'lienhe', component: Lab08Component },
      {path: 'gopy', component: Lab09Component },
      {path: 'hoidap', component: Lab10Component },
      {path: 'dangnhap', component: Lab11Component },
      {path: 'dangky', component: Lab12Component },
      {path: 'quenmk', component: Lab13Component },
      {path: 'testing/:Id', component:TestingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
