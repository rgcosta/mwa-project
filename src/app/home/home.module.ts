import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routin.module';
// This Module Components list:
import { QuestionsHomeComponent } from '../questions-home/questions-home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [ HomeComponent, QuestionsHomeComponent ]
})
export class HomeModule { }
