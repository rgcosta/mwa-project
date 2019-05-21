import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';
import { CatchErrorInterceptor } from './interceptors/http-error.interceptor';
import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';

import {PushNotificationService} from './services/push-notification.service';
import {MomentModule} from 'ngx-moment';
import {QuestionComponent} from './home/question.component';
import {QuestionService} from './services/home.service';
import {MatButtonModule, MatIconModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HeaderComponent,
    //HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig, 'mwa quaro'),
    AngularFireMessagingModule,
    BrowserModule,
      MomentModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
      MatButtonModule,
      MatIconModule,
    SharedModule,
    AuthModule,
    AdminModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true,
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: CatchErrorInterceptor,
    multi: true,
  }, PushNotificationService, QuestionService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
