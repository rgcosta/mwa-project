import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from "./profile-data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  menuItem: number;
  user : any;
  quesOrAns : any[]=[];

  constructor(public profileData: ProfileDataService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.menuItem = 1;
  }

  myQuestions() {
    // this.quesOrAns.length = 0;
    this.profileData.getMyQuestions(this.user.id).subscribe( question => {
      this.quesOrAns.push(question);
    });
    console.log(this.quesOrAns);
    this.menuItem = 2;
  }

  questionsFollowed() {
    // this.quesOrAns.length = 0;
    // this.profileData.getQuestionsFollowed(this.user.id).subscribe( question => {
    //   this.quesOrAns.push(question);
    // });
    // this.menuItem = 2;
  }

  myAnswers() {

  }
}
