import { Component, OnInit } from '@angular/core';
import {QuestionService} from './home.service';
import {TokenStorage} from '../auth/token.storage';

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
    constructor(private question:QuestionService , private token:TokenStorage){}
    private Question:any;
    private t:any = this.token.getToken();
    topic=[{"topic":"Angular","picture":"./img/some.jpg"},{"topic":"MWA","picture":"./img/some.jpg"}];



    ngOnInit() {
        this.question.getTopic(this.t).subscribe(data=>{
            console.log("come on"+data);
            this.Question = data;
        });

    }

}
