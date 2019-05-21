import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { useAnimation } from '@angular/animations';
import {PushNotificationService} from '../services/push-notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() user: any = {};
  message;
  constructor(
    private authService: AuthService,
    private router: Router ,
    protected pushNotificationService: PushNotificationService
  ) { }

  ngOnInit() {
    console.log(this.user);
    if ( this.user ) {
      this.pushNotificationService.requestPermission();
      this.pushNotificationService.listen();
    }
  }

  async logout() {
    await this.pushNotificationService.unsubscribe();
    this.authService.signOut();
    this.navigate('/auth/login');
  }

  navigate(link): void {
    this.router.navigate([link]);
  }

}
