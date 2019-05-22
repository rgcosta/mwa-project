import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module'
import { QuestionsBodyComponent } from '../questions-body/questions-body.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuestionsRoutingModule
  ],
  declarations: [QuestionsComponent, QuestionsBodyComponent]
})
export class QuestionsModule { }
