import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

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
    private movieService: MovieService
  ) {}

  ngOnInit(): void {}
}
