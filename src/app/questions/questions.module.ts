import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module'
import { QuestionsBodyComponent } from '../questions-body/questions-body.component';
import {MomentModule} from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuestionsRoutingModule,
    MomentModule
  ],
  declarations: [QuestionsComponent, QuestionsBodyComponent]
})
export class QuestionsModule { }
