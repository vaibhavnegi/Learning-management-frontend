import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LMS';
  coursepage: boolean = false;
  studentpage: boolean = false;
  subjectpage: boolean = false;
  teacherpage: boolean = false;

  course() {
    this.coursepage = true;
    this.studentpage = false;
    this.subjectpage = false;
    this.teacherpage = false;

  }
  student() {
    this.coursepage = false;
    this.studentpage = true;
    this.subjectpage = false;
    this.teacherpage = false;

  }
  subject() {
    this.coursepage = false;
    this.studentpage = false;
    this.subjectpage = true;
    this.teacherpage = false;

  }
  teacher() {
    this.coursepage = false;
    this.studentpage = false;
    this.subjectpage = false;
    this.teacherpage = true;
  }
}
