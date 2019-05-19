import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss'],

})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  // email: string;
  // password: string;

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  get email(): any { return this.userForm.get('email'); }
  get password(): any { return this.userForm.get('password'); }

  ngOnInit() {
  }

  login(): void {

    let {
      email,
      password
    } = this.userForm.getRawValue();

    this.authService.login(email, password)
    .subscribe(data => {
      this.router.navigate(['home']);
    })
  }

}
