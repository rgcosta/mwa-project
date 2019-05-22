import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.scss']
})
export class DisplayProfileComponent implements OnInit {
  @Input() questionsOrAnswers: any;
  @Input() menuItem:number;
  @Output() onRemoveQuestion=  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeQuestion(questionId: any) {
    this.onRemoveQuestion.emit(questionId);
  }

}
