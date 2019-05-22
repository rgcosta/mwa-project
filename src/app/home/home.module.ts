import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
// This Module Components list:
import { QuestionsHomeComponent } from '../questions-home/questions-home.component';
import { TopicComponent } from '../topic/topic.component';
import {MomentModule} from 'ngx-moment';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MomentModule
    ],
  declarations: [ HomeComponent, QuestionsHomeComponent, TopicComponent ]

})
export class HomeModule { }
