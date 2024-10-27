import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private autSvc: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const data = this.autSvc.authSubject$.getValue();
    if (!data) return next.handle(request);
    const cloneRequest = request.clone({
      setHeaders: {
        Autorization: `Bearer ${data.accessToken}`,
      },
    });
    return next.handle(cloneRequest);
  }
}
