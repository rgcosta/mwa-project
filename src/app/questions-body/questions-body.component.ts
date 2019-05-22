import { Component, OnInit, Input } from '@angular/core';
import {QuestionService} from '../services/home.service';

@Component({
  selector: 'app-questions-body',
  templateUrl: './questions-body.component.html',
  styleUrls: ['./questions-body.component.scss']
})
export class QuestionsBodyComponent implements OnInit {

  @Input() question: any;
  @Input() user: any;

  constructor(private questions: QuestionService) { }

  ngOnInit() {
    console.log(this.user.email);
  }
  up(answerId) {
    this.questions.upVote( this.user._id  , answerId).subscribe(data => {
      this.question =  data;
    });


  }
  down(answerId) {
    this.questions.downVote(this.user._id , answerId).subscribe(data => {
      this.question = data;
    });
  }
}
