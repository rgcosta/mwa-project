import { Component, OnInit } from '@angular/core';
import { MakeRequestService } from '../services/make-request.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private urlQuestions: string = '/api/questions';
  private urlTopics: string = '/api/topics';
  private label: string = 'questions';

  private src: string;
  private default: string = "../../assets/profile.png";
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
                          this.Question.filter(data => data.topic == this.subject)
                              .sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
                              .slice(0,20) :
                          this.Question.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
                              .slice(0,20);

        this.bytopics = this.subject ?
                          this.Question.filter(data => data.topic == this.subject)
                              .sort((a, b) => a.answers.length > b.answers.length ? -1 : 1)
                              .slice(0,5) :
                          this.Question.sort((a, b) => a.answers.length > b.answers.length  ? -1 : 1)
                              .slice(0,5);
      }
    ); 
    
  }

  imageExists(url) {
    var img = new Image();
    if(img.onload) return true;
    if(img.onerror) return false;
    img.src = url;
  }

  ngOnInit() {   
  }
  
  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
