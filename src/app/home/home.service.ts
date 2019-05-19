import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QuestionService {
    private data:any;
    constructor(private http: HttpClient) {}

    getQuestions() {

      return  this.http.get('/api/questions');


    }
}
