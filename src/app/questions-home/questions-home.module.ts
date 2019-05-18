import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-home-routing.module';
import { QuestionsHomeComponent } from './questions-home.component';
// import some guard for session

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ],
  declarations: [ QuestionsHomeComponent ]
})
export class QuestionsHomeModule { }
