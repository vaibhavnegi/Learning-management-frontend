import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseList;
  batchList;
  constructor(private data: CoursesService) { }
  ngOnInit() {
    this.data.getCourses()
        .subscribe((res) => {
            console.log(res);
            this.courseList = res;
        })


    this.data.getBatches()
        .subscribe((res) => {
            console.log(res);
            this.batchList = res;
        })
}

addCourse(name: string) {
    console.log(name+"name is here")
    this.data.postCourse(name)
        .subscribe((res) => {
            console.log(res)
        })
}

addBatch(name: string, id: number) {
    console.log(name);
    console.log(id);
    let newBatch = {
        'name': name,
        'id': id
    }
    this.data.postBatch(name,id)
        .subscribe((res) => {
            console.log(res);

        })
}

}
