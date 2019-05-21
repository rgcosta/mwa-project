import { Component, OnInit } from '@angular/core';
import { MakeRequestService } from '../services/make-request.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private urlQuestions: string = '/api/questions';
  private urlTopics: string = '/api/topics';
  private label: string = 'questions';

  private subject: string;
  private bytopics: any;
  private topics: any;
  
  private Question: any;
  private items: any;
  private subscription: Subscription;
  constructor(private service: MakeRequestService, private router: ActivatedRoute, private auth: AuthService) {

    this.subscription = this.router.params.subscribe(param => {
      this.subject = param.topic;      
    });

    this.subscription = this.service.getData(this.urlTopics).subscribe(
      data => {
        this.topics = data;
      }
    )

    this.subscription = this.service.getData(this.urlQuestions).subscribe(
      data => {
        localStorage.setItem(this.label, JSON.stringify(data));
        this.Question = data;
        this.items = this.subject ?
                          this.Question.filter(data => data.topic == this.subject).slice(0,20) :
                          this.Question.slice(0,20);
        this.bytopics = this.subject ?
                          this.Question.filter(data => data.topic == this.subject).slice(0,5) :
                          this.Question.slice(0,5);
      }
    ); 
    
  }

  ngOnInit() {   
  }
  
  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
