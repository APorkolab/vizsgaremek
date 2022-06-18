import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { WatchedMovie } from '../../model/watched-movie';
import { NotificationService } from 'src/app/service/notification.service';
import { MovieService } from 'src/app/service/movie.service';
import { WatchedMovieService } from 'src/app/service/watched-movie.service';
import { FormsModule } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-watched-movies-editor',
  templateUrl: './watched-movies-editor.component.html',
  styleUrls: ['./watched-movies-editor.component.scss'],
})
export class WatchedMoviesEditorComponent implements OnInit {
  watchedMovie$!: Observable<WatchedMovie>;
  watchedMovie: WatchedMovie = new WatchedMovie();
  entity = 'Watched movie';

  constructor(
    private watchedMovieService: WatchedMovieService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) => {
        if (param['id'] == '0') {
          return of(new WatchedMovie());
        }
        this.watchedMovie$ = this.watchedMovieService.getOne(param['id']);
        return this.watchedMovieService.getOne(param['id']);
      },
    });
    this.watchedMovie$.subscribe({
      next: (watchedMovie) =>
        (this.watchedMovie = watchedMovie ? watchedMovie : this.watchedMovie),
    });
  }

  onUpdate(watchedMovie: WatchedMovie) {
    this.watchedMovieService.update(watchedMovie).subscribe({
      next: (category) => this.router.navigate(['/', 'watched-movies']),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessEdit(),
    });
  }

  onCreate(watchedMovie: WatchedMovie) {
    this.watchedMovieService.create(watchedMovie).subscribe({
      next: (category) => this.router.navigate(['/', 'watched-movies']),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessCreate(),
    });
  }

  showSuccessEdit() {
    this.notifyService.showSuccess(
      `${this.entity} edited successfully!`,
      'FaMoBase v.1.0.0'
    );
  }

  showSuccessCreate() {
    this.notifyService.showSuccess(
      `${this.entity} created successfully!`,
      'FaMoBase v.1.0.0'
    );
  }

  showError(err: String) {
    this.notifyService.showError(
      'Something went wrong. Details:' + err,
      'FaMoBase v.1.0.0'
    );
  }
}
