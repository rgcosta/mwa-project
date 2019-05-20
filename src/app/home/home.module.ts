import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routin.module';
// This Module Components list:
import { QuestionsHomeComponent } from '../questions-home/questions-home.component';
import { TopicComponent } from '../topic/topic.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [ HomeComponent, QuestionsHomeComponent, TopicComponent ]
})
export class HomeModule { }
