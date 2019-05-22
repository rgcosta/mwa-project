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
  private default: string = '../../assets/profile.png'
  private src: string;

  constructor(private questions: QuestionService) { }

  ngOnInit() {
    console.log(this.user.email);
  }

  imageExists(url) {
    var img = new Image();
    if(img.onload) return true;
    if(img.onerror) return false;
    img.src = url;
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
