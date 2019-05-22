import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor(public http: HttpClient) { }

  getMyQuestions(userId) {
    let path = `/api/profiles/${userId}/questions`;
    console.log(path);
    return this.http.get(path);
  }

  getMyAnswers() {
    return this.http.get('');
  }

  getQuestionsFollowed(userId) {
    return this.http.get('');
  }
}
