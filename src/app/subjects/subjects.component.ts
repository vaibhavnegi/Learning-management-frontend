import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { CoursesService } from '../courses.service';


@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
    subjectlist;
    courselist;

    constructor(private sdata: SubjectsService, private cdata: CoursesService) { }

    ngOnInit() {
        this.sdata.getSubjects()
            .subscribe((res) => {
                console.log(res);
                this.subjectlist = res;
            })

        this.cdata.getCourses()
            .subscribe((res) => {
                console.log(res);
                this.courselist = res;
            })
    }
    addSubject(name: string, cid: number) {
        console.log(name);
        console.log(cid);
        let newSubject = {
            'name': name,
            'cid': cid
        }
        this.sdata.postSubject(newSubject)
            .subscribe((res) => {
                console.log(res);
               
            })
    }

}
