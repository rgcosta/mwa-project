import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { MakeRequestService } from '../services/make-request.service';

@Component({
  selector: 'app-top5',
  templateUrl: './questions-home.component.html',
  styleUrls: ['./questions-home.component.scss']
})
export class QuestionsHomeComponent implements OnInit {

  private label: string = 'questions';
  private url: string = '/api/questions';
  private topic: string;
  private topics: any;
  private subscription: Subscription;
  private questionssubs: Subscription;

  constructor(private router: ActivatedRoute, private service: MakeRequestService) {
    this.subscription = this.router.params.subscribe(param => {
      this.topic = param.topic;
      param.topic ? this.getQuestions(param.topic) : this.getQuestions();        
    });
  }

  getQuestions(topic?: any){
    this.questionssubs = this.service.getData(this.url).subscribe(
      data => {
        localStorage.setItem(this.label, JSON.stringify(data));
        this.topics = topic ?
                      this.service.getCachedData(this.label).filter(data => data.topic == topic).slice(0,5) :
                      this.service.getCachedData(this.label).slice(0,5);
      }
    )

    // this.topics = topic ?
    //                   this.service.getCachedData(this.label).filter(data => data.topic == topic).slice(0,5) :
    //                   this.service.getCachedData(this.label).slice(0,5);
  }

  ngOnInit() {
    //this.topic = this.router.snapshot.paramMap.get("topic");
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.questionssubs.unsubscribe();
  }

}
