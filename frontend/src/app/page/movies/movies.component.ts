import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { Movie } from 'src/app/model/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  columns = this.config.movieTableColumns;
  list$ = this.movieService.getAll();

  constructor(
    private config: ConfigService,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelectOne(movie: Movie): void {
    this.router.navigate(['/', 'movies', movie._id]);
  }

  onDeleteOne(movie: Movie): void {
    this.movieService
      .delete(movie)
      .subscribe(() => (this.list$ = this.movieService.getAll()));
  }
}
