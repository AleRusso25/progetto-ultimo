import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { ILoginRequest } from '../../interfaces/i-login-request';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  form: ILoginRequest = {
    email: '',
    password: '',
  };

  login() {
    this.authSvc.login(this.form).subscribe({
      next: (resp) => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert(error.error);
      },
    });
  }
  submit(form: NgForm) {
    form.reset();
  }
}
