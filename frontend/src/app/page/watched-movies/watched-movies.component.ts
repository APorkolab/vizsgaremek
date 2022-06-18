import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { WatchedMovieService } from '../../service/watched-movie.service';
import { WatchedMovie } from '../../model/watched-movie';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { NotificationService } from 'src/app/service/notification.service';
// import { ToastrService } from 'ngx-toastr';
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
    private watchedMovieService: WatchedMovieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelectOne(watchedMovie: WatchedMovie): void {
    this.router.navigate(['/', 'watched-movies', 'edit', watchedMovie._id]);
  }

  onDeleteOne(watchedMovie: WatchedMovie): void {
    this.watchedMovieService
      .delete(watchedMovie)
      .subscribe(() => (this.list$ = this.watchedMovieService.getAll()));
  }
}
