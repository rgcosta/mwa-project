import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/home.service';
import {TokenStorage} from '../auth/token.storage';
import {MatIconRegistry} from '@angular/material';

import {ActivatedRoute} from '@angular/router';
import {ɵDomSanitizerImpl} from '@angular/platform-browser';
@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./home.component.css']
})
export class QuestionComponent implements OnInit {
    // tslint:disable-next-line:max-line-length
    constructor(private question: QuestionService, private token: TokenStorage , private route: ActivatedRoute, private matIconRegistry: MatIconRegistry) {

    }

    private Question: any;
    private id: any;
    private data: any;


    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            console.log(params);
          this.id =  params.get('id');
        });
     this.data =   this.question.getQuestionsById(this.id);
     this.data.subscribe(data => {
            console.log(data);
            this.Question = data;
        });

    }

    up(answerId) {
        this.question.upVote( this.id  , answerId).subscribe(data => {
         this.Question =  data;
        });


    }
    down(answerId) {
        this.question.downVote(this.id , answerId).subscribe(data => {
            this.Question = data;
        });
    }
}
