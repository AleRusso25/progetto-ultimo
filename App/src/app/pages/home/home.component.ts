import { IMovie } from '../../interfaces/i-movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private moviesSvc: MoviesService) {}
  allMovies: IMovie[] = [];
  ngOnInit() {
    this.moviesSvc.getAllMovies().subscribe((movies) => {
      this.allMovies = movies;
    });
  }
  onImageError(event: Event) {
    console.error("Impossibile caricare l'immagine:");
  }
}
