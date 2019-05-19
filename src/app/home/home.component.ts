import { Component, OnInit } from '@angular/core';
import {QuestionService} from './home.service';
import {MomentModule} from 'ngx-moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private question:QuestionService){}
  private Question:any;




  ngOnInit() {
this.question.getQuestions().subscribe(data=>{
  console.log(data);
  this.Question = data;
});

  }

}
