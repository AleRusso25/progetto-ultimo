
import { IAuth } from './../../interfaces/i-auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  utente!: IAuth | null;
  constructor(private authSrv: AuthService) {}
  ngOnInit() {
    this.authSrv.user$

    };

  logout() {
    this.authSrv.logout();
  }
}
