import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { NotificationService } from 'src/app/service/notification.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movies-editor',
  templateUrl: './movies-editor.component.html',
  styleUrls: ['./movies-editor.component.scss'],
})
export class MoviesEditorComponent implements OnInit {
  movie$!: Observable<Movie>;

  movie: Movie = new Movie();

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) => (this.movie$ = this.movieService.getOne(param['id'])),
    });
    this.movie$.subscribe({
      next: (movie) => (this.movie = movie ? movie : this.movie),
    });
  }

  onUpdate(movie: Movie) {
    this.movieService.update(movie).subscribe({
      next: (category) => this.router.navigate(['/', 'movies']),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessEdit(),
    });
  }

  onCreate(movie: Movie) {
    this.movieService.create(movie).subscribe({
      next: (category) => this.router.navigate(['/', 'movies']),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessCreate(),
    });
  }

  showSuccessEdit() {
    this.notifyService.showSuccess(
      'Item edited successfully!',
      'FaMoBase v.1.0.0'
    );
  }

  showSuccessCreate() {
    this.notifyService.showSuccess(
      'Item created successfully!',
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
