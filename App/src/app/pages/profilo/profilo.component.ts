import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/i-user';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.scss',
})
export class ProfiloComponent implements OnInit {
  constructor(private authSvc: AuthService) {}
  loggedUser!: IUser;
  ngOnInit() {
    this.loggedUser = this.authSvc.getLoggedUser();
  }
}
