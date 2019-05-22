import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from "./profile-data.service";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  menuItem: number;
  user : any;
  quesOrAns : any[]=[];

  constructor(public profileData: ProfileDataService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.menuItem = 1;
  }

  myQuestions() {
    this.quesOrAns.length = 0;
    this.profileData.getMyQuestions(this.user.id).subscribe( question => {
      this.quesOrAns.push(question);
      console.log(this.quesOrAns);
    });
    this.menuItem = 2;
  }

  questionsFollowed() {
    this.quesOrAns.length = 0;
    this.profileData.getQuestionsFollowed(this.user.id).subscribe( following => {
      this.quesOrAns.push(following);
    });
    this.menuItem = 3;
  }

  myAnswers() {
    this.quesOrAns.length = 0;
    this.profileData.getMyAnswers(this.user.id).subscribe( answer => {
      this.quesOrAns.push(answer);
    });
    this.menuItem = 4;
  }

  removeQuestionById(questionId: any) {
      this.profileData.removeQuestion(this.user.id, questionId).subscribe( data => {
        this.router.navigate(['']);
      })
  }
}
