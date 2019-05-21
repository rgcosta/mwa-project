import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module'
import { QuestionsBodyComponent } from '../questions-body/questions-body.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ],
  declarations: [QuestionsComponent, QuestionsBodyComponent]
})
export class QuestionsModule { }
