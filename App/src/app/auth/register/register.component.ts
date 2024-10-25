import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  constructor(
    private authSvc: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      password: this.fb.control(''),
    });
  }
  form!: FormGroup;
  
  register() {
    this.authSvc.register(this.form.getRawValue()).subscribe({
      next: (res) => {
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        alert(error.error);
      },
    });
  }
}
