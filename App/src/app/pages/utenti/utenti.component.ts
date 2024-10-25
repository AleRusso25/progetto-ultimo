import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/i-user';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.scss',
})
export class UtentiComponent implements OnInit {
  constructor(private userSvc: UserService) {}
  users: IUser[] = [];
  ngOnInit() {
    this.userSvc.getAllUser().subscribe((users) => {
      this.users = users;
    });
  }
}
