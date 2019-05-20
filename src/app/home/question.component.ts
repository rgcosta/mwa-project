import { Component, OnInit } from '@angular/core';
import {QuestionService} from './home.service';
import {TokenStorage} from '../auth/token.storage';
import {MatIconRegistry} from '@angular/material';

import {ActivatedRoute} from '@angular/router';
import {ɵDomSanitizerImpl} from '@angular/platform-browser';
@Component({
    selector: 'app-home',
    templateUrl: './question.component.html',
    styleUrls: ['./home.component.css']
})
export class QuestionComponent implements OnInit {
    constructor(private question: QuestionService, private token: TokenStorage , private route:ActivatedRoute, private matIconRegistry: MatIconRegistry) {

    }

    private Question: any;
    private id:any;


    ngOnInit() {
        this.route.paramMap.subscribe(params=>{
          this.id =  params.get("id");
        });
        this.question.getQuestionsById(this.id).subscribe(data => {
            console.log(data);
            this.Question = data;
        });

    }
}
