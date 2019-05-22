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

  getMyAnswers(userId) {
    return this.http.get(`/api/profiles/${userId}/answers`);
  }

  getQuestionsFollowed(userId) {
    return this.http.get(`/api/profiles/${userId}/following`);
  }

  removeQuestion(userId, questionId) {
    return this.http.delete(`/api/profiles/${userId}/questions/${questionId}`);
  }
}
