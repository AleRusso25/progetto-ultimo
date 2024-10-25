import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  usersUrl: string = environment.usersUrl;
  getAllUser() {
    return this.http.get<IUser[]>(this.usersUrl);
  }
}
