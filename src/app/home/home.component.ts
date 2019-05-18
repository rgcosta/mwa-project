import { Component, OnInit } from '@angular/core';
import { SetUserService } from '../set-user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private user: any;
  constructor(private service: SetUserService) {
    this.user = this.service.getUserData();
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  ngOnInit() {
  }

}
