import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { SetUserService } from './services/set-user.service';
import { MakeRequestService } from './services/make-request.service'
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';


import { AuthService } from './auth/auth.service';
import * as schema from './schema/equipment.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private userSubscription: Subscription;
  private subscription: Subscription;
  private reqSubscription: Subscription;
  
  public user: any;
  private fullname: string;

  private requrl: string = 'api/topics';
  private topics: any;

  questionForm = new FormGroup({
    newQuestion: new FormControl('', [Validators.required]),
    topic: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private service: MakeRequestService
  ) {
    this.registerSvgIcons();
    this.subscription = this.service.getData(this.requrl).subscribe(data =>{
      this.topics = data;
    })
  }

  public ngOnInit() {

    // init this.user on startup
    this.authService.me().subscribe(data => {
      this.user = data.user;
    });

    // update this.user after login/register/logout
    this.userSubscription = this.authService.$userSource.subscribe((user) => {
      this.user = user;
      if(this.user){
        this.fullname = this.user.fullname;
      }
    });
    
  }

  addQuestion() {
    if(!this.questionForm.valid) return;
    let url = 'api/add/question'
    let {
      newQuestion,
      topic,
    } = this.questionForm.getRawValue();
    this.reqSubscription = this.service.postData(url, {newQuestion, topic})
                              .subscribe(data => {
                                this.router.navigate(['home']);
                              });
  }

  logout(): void {
    this.authService.signOut();
    this.navigate('');
  }

  navigate(link): void {
    this.router.navigate([link]);
  }

  ngOnDestroy() { 
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    if(this.reqSubscription){
      this.reqSubscription.unsubscribe();
    }
  }

  registerSvgIcons() {
    [
      'close',
      'add',
      'add-blue',
      'airplane-front-view',
      'air-station',
      'balloon',
      'boat',
      'cargo-ship',
      'car',
      'catamaran',
      'clone',
      'convertible',
      'delete',
      'drone',
      'fighter-plane',
      'fire-truck',
      'horseback-riding',
      'motorcycle',
      'railcar',
      'railroad-train',
      'rocket-boot',
      'sailing-boat',
      'segway',
      'shuttle',
      'space-shuttle',
      'steam-engine',
      'suv',
      'tour-bus',
      'tow-truck',
      'transportation',
      'trolleybus',
      'water-transportation',
    ].forEach((icon) => {
      this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`))
    });
  }

}
