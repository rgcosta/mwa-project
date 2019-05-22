import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QuestionService {
    private data:any;
    constructor(private http: HttpClient) {}

    getQuestions() {

      return  this.http.get('/api/question');


    }
    getQuestionsById(id) {
        return this.http.get('/api/questions/' + id);
    }
    upVote(id , answerId) {
        return this.http.put('/api/questions/' + id + '/answers/' + answerId + '/upvote', {} );
    }
    downVote(id , answerId) {

        return this.http.put('/api/questions/' + id + '/answers/' + answerId + '/downvote', {} );
    }
    getTopic(token) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token
        })
        return this.http.get('/api/topic', { headers: headers});
    }
}
