import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'App';
  constructor(private authSrv: AuthService) {}
  ngOnInit() {
    this.authSrv.restore();
  }
}
