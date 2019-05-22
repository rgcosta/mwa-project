import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../services/home.service';

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
  up(questionId , answerId) {
    this.questions.upVote( questionId  , answerId).subscribe(data => {
      this.question =  data;
    });
  }
  down(questionId , answerId) {
    this.questions.downVote(questionId , answerId).subscribe(data => {
      this.question = data;
    });
  }
}
