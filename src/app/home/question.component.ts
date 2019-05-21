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


    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            console.log(params);
          this.id =  params.get('id');
        });
        this.question.getQuestionsById(this.id).subscribe(data => {
            console.log(data);
            this.Question = data;
        });

    }
}
