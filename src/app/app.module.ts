import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CoursesService } from './courses.service'
import { StudentsService } from './students.service';
import { SubjectsService } from './subjects.service';
import { TeachersService } from './teachers.service';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        StudentsComponent,
        SubjectsComponent,
        TeachersComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [CoursesService, StudentsService, SubjectsService, TeachersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
