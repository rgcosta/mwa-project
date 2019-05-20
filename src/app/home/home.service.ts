import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QuestionService {
    private data:any;
    constructor(private http: HttpClient) {}

    getQuestions() {

      return  this.http.get('/api/questions');


    }
    getQuestionsById(id){
        return this.http.get('/api/questions/'+id);
    }
    getTopic(token){
        const headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':token
        })
        return this.http.get('/api/topic',{headers:headers})
    }
}
