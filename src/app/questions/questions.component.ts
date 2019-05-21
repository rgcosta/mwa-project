import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MakeRequestService } from '../services/make-request.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { SetUserService } from '../services/set-user.service';

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

  private isOwner: boolean;
  private subscription: Subscription; 
  private reqSubscription: Subscription;
  private userSubscription: Subscription;

  constructor(
    private service: MakeRequestService,
    private userService: SetUserService,
    private router: ActivatedRoute, 
    private authService: AuthService) {

    this.subscription = this.router.params.subscribe(param => {
      this.questions = param.target; 
    });

    this.reqSubscription = this.service.getDataById(this.url, this.questions).subscribe(
      data => {
                this.question = data;
              }
    );
}

  ngOnInit() {
    this.fullname = this.userService.getCachedData('user');
  }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
    if(this.reqSubscription)
      this.reqSubscription.unsubscribe();
  }
}
