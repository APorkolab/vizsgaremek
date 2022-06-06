import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { WatchedMovieService } from 'src/app/service/watched-movie.service';

@Component({
  selector: 'app-watched-movies',
  templateUrl: './watched-movies.component.html',
  styleUrls: ['./watched-movies.component.scss'],
})
export class WatchedMoviesComponent implements OnInit {
  columns = this.config.watchedMoviesColumn;
  list$ = this.watchedMovieService.getAll();

  constructor(
    private config: ConfigService,
    private watchedMovieService: WatchedMovieService
  ) {}

  ngOnInit(): void {}
}
