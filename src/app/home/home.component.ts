import { Component, OnInit } from '@angular/core';
import { MakeRequestService } from '../services/make-request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private url: string = '/api/questions';
  private label: string = 'questions';
  private topics: any;
  private Question: any;
  private subs: Subscription;
  constructor(private service: MakeRequestService) {}

  ngOnInit() {
    this.subs = this.service.getData(this.url).subscribe(
      data => {
        localStorage.setItem(this.label, JSON.stringify(data));
        this.Question = data;
      }
    )
  }

}
