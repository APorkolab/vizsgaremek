import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { Movie } from 'src/app/model/movie';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  columns = this.config.movieTableColumns;
  list$ = this.movieService.getAll();
  entity = 'Movie';

  constructor(
    private config: ConfigService,
    private movieService: MovieService,
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

  onSelectOne(movie: Movie): void {
    this.router.navigate(['/', 'movies', 'edit', movie._id]);
  }

  onDeleteOne(movie: Movie): void {
    this.movieService.delete(movie).subscribe({
      next: () => (this.list$ = this.movieService.getAll()),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessDelete(),
    });
  }
}
