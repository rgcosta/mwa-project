import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions-body',
  templateUrl: './questions-body.component.html',
  styleUrls: ['./questions-body.component.scss']
})
export class QuestionsBodyComponent implements OnInit {

  @Input() question: any;
  @Input() user: any;

  constructor() { }

  ngOnInit() {
    console.log("-->", this.question);
  }

}
