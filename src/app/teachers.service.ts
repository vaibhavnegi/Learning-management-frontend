import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TeachersService {

    BASE_URL = 'https://vaibhavlms.herokuapp.com/teacher';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        })
    };

    constructor(private http: HttpClient) { }

    getTeachers() {
        return this.http.get(this.BASE_URL);
    }

    postTeachers(newTeacher) {
        return this.http.post(this.BASE_URL, newTeacher, this.httpOptions)
    }

}
