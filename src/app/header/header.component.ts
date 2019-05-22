import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import {PushNotificationService} from '../services/push-notification.service';
import {of, Subject, Subscription} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import {SearchService} from '../services/search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() user: any = {};
  messages: any[] = [];
  searchResults: any[] = [];
  subscription: Subscription;
  subscription2: Subscription;
  searchTextChanged = new Subject<string>();
  private src: string;
  private default: string = '../../assets/profile.png';

  constructor(
    private authService: AuthService,
    private router: Router ,
    protected pushNotificationService: PushNotificationService,
    private _search: SearchService
  ) { }

  ngOnInit() {
    if ( this.user ) {
      this.pushNotificationService.requestPermission();
      this.pushNotificationService.listen();
      this.subscription = this.pushNotificationService.currentNotice.subscribe(message => {
        if (message) {
          this.messages.push(message);
        } else {
          // clear messages when empty message received
          this.messages = [];
        }
      });

      this.subscription2 = this.searchTextChanged.pipe(
          debounceTime(200),
          distinctUntilChanged(),
          switchMap(search => this._search.search(search).pipe(
              tap(() => this.searchResults = []),
              catchError(() => {
                return of([]);
              }))))
          .subscribe((data) => { for ( const d of data) {
            this.searchResults.push(d); }});
    }
  }

  pictureError(){
    this.src = this.default;
  }

  removeNotifi(i): void {
    console.log(i);
    this.messages.splice(i, 1);
    console.log(this.messages);
  }

  async logout() {
    await this.pushNotificationService.unsubscribe();
    this.authService.signOut();
    this.navigate('/auth/login');
  }

  navigate(link): void {
    this.router.navigate([link]);
  }

  onkeypress(value) {
    console.log(value);
    this.searchTextChanged.next(value);
  }
}
