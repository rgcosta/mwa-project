import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetUserService {

  public user: any = {
    name: {
      first: 'John',
      last: 'Doodle'
    },
    email: 'john.doodle@gmail.com',
    picture: '',
    questions: [],
    answers: [],
    following: [],
    admin: true
  };

  constructor() { }

  getUserData(){
    return this.user;
  }
  getCachedData(){
    return JSON.parse(localStorage.getItem('users'));
  }
}
