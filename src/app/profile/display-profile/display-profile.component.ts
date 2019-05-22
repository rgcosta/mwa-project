import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.scss']
})
export class DisplayProfileComponent implements OnInit {
  @Input() questionsOrAnswers: any;

  constructor() { }

  ngOnInit() {
  }

}
