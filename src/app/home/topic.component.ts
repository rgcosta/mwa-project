import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/home.service';

@Component({
    selector: 'app-topic',
    template: ` <div *ngFor="let topics of topic">
 <div class="post__author author vcard inline-items">
        <img [src]=""  height="48px" width="48px" class="img-responsive" alt="author">
        <div>
                <p>{{topics.topic}}</p>
        </div>
    </div>
    </div>
`

    ,
    styleUrls: ['./home.component.css']
})
export class TopicComponent implements OnInit {
    constructor(private question:QuestionService){}
    private Question:any;
    topic=[{"topic":"Angular","picture":"./img/some.jpg"},{"topic":"MWA","picture":"./img/some.jpg"}];



    ngOnInit() {
        this.question.getQuestions().subscribe(data=>{
            console.log(data);
            this.Question = data;
        });

    }

}
