import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../interfaces/i-movie';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  moviesUrl: string = environment.moviesUrl;
  getAllMovies() {
    return this.http.get<IMovie[]>(this.moviesUrl);
  }
}
