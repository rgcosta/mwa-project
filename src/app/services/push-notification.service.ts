import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class PushNotificationService {
  currentNotice = new BehaviorSubject(null);
  subscribeCreateUrl = '/api/subscriptions';
  notificationListUrl = '/api/notifications';
  constructor(private afMessaging: AngularFireMessaging,
              private http: HttpClient,
              private router: Router) {
  }

  requestPermission() {
    this.afMessaging.requestToken
        .subscribe(
            (token) => { console.log('Permission granted! Save to the server!', token);
            this.subscribe(token);
              localStorage.removeItem('PushToken');
              localStorage.setItem('PushToken', token);
              },
            (error) => { console.error(error); },
        );
  }
  subscribe(token: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('AuthToken')
      })
    };
    // return this.http.post<any>(this.subscribeCreateUrl + '?email=' + email + '&token=' + token).toPromise().then(data =>(data));
    return this.http.post(this.subscribeCreateUrl, {
      token: token
    }, options).toPromise().then(data => (data));
  }

  unsubscribe() {
    console.log('unsubscribe');

    this.afMessaging.getToken
        .pipe(mergeMap(token => this.afMessaging.deleteToken(token)))
        .subscribe(
            (success) => { console.log('Deleted!'); }
        );
    const pushToken = localStorage.getItem('PushToken');
    localStorage.removeItem('PushToken');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('AuthToken')
      }),
      body: {
        token: pushToken,
      },
    };
    return this.http.delete(this.subscribeCreateUrl, options).toPromise().then(data => (data));
  }

  listen() {
    this.afMessaging.messages
        .subscribe((message) => {console.log(message);
          this.currentNotice.next(message);
        });
  }
}
