import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor(public http: HttpClient) { }

  getMyQuestions(userId) {
    return this.http.get(`/api/profiles/${userId}/questions`);
  }

  getMyAnswers() {
    return this.http.get('');
  }

  getQuestionsFollowed(userId) {
    return this.http.get('');
  }
}
