import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { WatchedMovieService } from '../../service/watched-movie.service';
import { WatchedMovie } from '../../model/watched-movie';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-watched-movies',
  templateUrl: './watched-movies.component.html',
  styleUrls: ['./watched-movies.component.scss'],
})
export class WatchedMoviesComponent implements OnInit {
  columns = this.config.watchedMoviesColumn;
  list$ = this.watchedMovieService.getAll();
  entity = 'Watched movie';

  constructor(
    private config: ConfigService,
    private watchedMovieService: WatchedMovieService,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {}

  showSuccessDelete() {
    this.notifyService.showSuccess(
      `${this.entity} delete successfully!`,
      'FaMoBase v.1.0.0'
    );
  }

  showError(err: String) {
    this.notifyService.showError(
      'Something went wrong. Details:' + err,
      'FaMoBase v.1.0.0'
    );
  }

  onSelectOne(watchedMovie: WatchedMovie): void {
    this.router.navigate(['/', 'watched-movies', 'edit', watchedMovie._id]);
  }

  onDeleteOne(watchedMovie: WatchedMovie): void {
    this.watchedMovieService.delete(watchedMovie).subscribe({
      next: () => (this.list$ = this.watchedMovieService.getAll()),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessDelete(),
    });
  }
}
