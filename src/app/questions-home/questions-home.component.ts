import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

import { MakeRequestService } from '../services/make-request.service';

@Component({
  selector: 'app-top5',
  templateUrl: './questions-home.component.html',
  styleUrls: ['./questions-home.component.scss']
})
export class QuestionsHomeComponent implements OnInit {

  @Input() topics;
  @Input() subject;

  constructor() {  }

  ngOnInit() {
  }

}
