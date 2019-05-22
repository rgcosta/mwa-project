import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MakeRequestService } from '../services/make-request.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { SetUserService } from '../services/set-user.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  private url: string = '/api/questions';
  private questions: string;
  private fullname: string;

  private question: any;
  private user: any;
  private arrTemp: any[];

  private isOwner: boolean;
  private subscription: Subscription; 
  private reqSubscription: Subscription;
  private userSubscription: Subscription;

  answerForm = new FormGroup({
    newAnswer: new FormControl('', [Validators.required])
  });

  constructor(
    private service: MakeRequestService,
    private userService: SetUserService,
    private routerActive: ActivatedRoute,
    private router: Router, 
    private authService: AuthService) {

    this.user = this.userService.getCachedData('user');

    this.subscription = this.routerActive.params.subscribe(param => {
      this.questions = param.target; 
    });

    this.reqSubscription = this.service.getDataById(this.url, this.questions).subscribe(
      data => {
                this.question = data;
                this.arrTemp = this.question.answers.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1);
                this.question.answers = this.arrTemp;
              }
    );
  }

  addAnswer() {
    if(!this.answerForm.valid) return;
    let url = '/api/questions/' + this.questions + '/answers';
    let {
      newAnswer,
    } = this.answerForm.getRawValue();
    let content = {
      body: newAnswer,
      username: this.user.fullname,
      isPublic: true,
    };
    console.log(url);
    this.reqSubscription = this.service.postData(url, content)
                              .subscribe(data => {
                                console.log(data);
                                this.reqSubscription = this.service.getDataById(this.url, this.questions).subscribe(
                                  data => {
                                            this.question = data;
                                            this.arrTemp = this.question.answers.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1);
                                            this.question.answers = this.arrTemp;
                                          }
                                );
                              });
  }

  navigate(link): void {
    this.router.navigate([link]);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
    if(this.reqSubscription)
      this.reqSubscription.unsubscribe();
  }
}
