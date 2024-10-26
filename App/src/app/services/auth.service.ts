import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment.development';
import { IAccesData } from '../interfaces/i-acces-data';
import { BehaviorSubject, map, tap } from 'rxjs';
import { IUser } from '../interfaces/i-user';
import { ILoginRequest } from '../interfaces/i-login-request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  restore() {
    throw new Error('Method not implemented.');
  }
  isLoggedIn: boolean | undefined;
  constructor(private http: HttpClient, private router: Router) {}

  jwtHelper = new JwtHelperService();
  registerUrl: string = environment.registerUrl;
  loginUrl: string = environment.loginUrl;
  authSubject$ = new BehaviorSubject<IAccesData | null>(null);
  user$ = this.authSubject$.asObservable().pipe(
    tap((accesData) => this.isLoggedIn == !!accesData),
    map((accesData) => accesData?.user)
  );
  isLoggedIn$ = this.authSubject$;
  autoLogoutTimer: any;

  register(newUser: Partial<IUser>) {
    return this.http.post<IAccesData>(this.registerUrl, newUser);
  }

  login(authData: ILoginRequest) {
    return this.http.post<IAccesData>(this.loginUrl, authData).pipe(
      tap((accesData) => {
        this.authSubject$.next(accesData);
        localStorage.setItem('accesData', JSON.stringify(accesData));
        const expDate = this.jwtHelper.getTokenExpirationDate(
          accesData.accessToken
        );
        if (!expDate) return;
        this.autoLogout(expDate);
      })
    );
  }
  autoLogout(expDate: Date) {
    const exp = expDate.getTime() - new Date().getTime();
    this.autoLogoutTimer = setTimeout(() => {
      this.logout();
    }, exp);
  }
  logout() {
    this.authSubject$.next(null);
    localStorage.removeItem('accesData');
    this.router.navigate(['/auth/login']);
  }
}
