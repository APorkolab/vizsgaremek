import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @Input() movies: Movie[] = [];
  movies$: Observable<Movie[]> = this.movieService.getAll();

  keys: string[] = Object.keys(new Movie());
  phrase: string = '';
  filterKey: string = '';

  direction: string = 'asc';
  page: number = 1;
  column: string = 'id';

  type: string | number = 'number';
  length: number = 0;
  actualMovies$: Observable<Movie[]> = this.getActualMovies();

  setSortParams(direction: string, column: string, type: string) {
    this.direction = direction;
    let key =
      this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
      'id';
    this.column = key;
    this.type = typeof new Movie()[key];
  }
  constructor(
    private movieService: MovieService,
    public notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.movies$.subscribe({
      next: (movie) => {
        this.length = movie.length;
      },
    });
  }

  getActualMovies(): Observable<Movie[]> {
    return this.movies$.pipe(
      map((movie) => movie.slice((this.page - 1) * 10, this.page * 10))
    );
  }

  onDelete(movie: Movie) {
    this.movieService.delete(movie).subscribe({
      next: (bill) => (this.movies$ = this.movieService.getAll()),
      error: (err) => this.showError(err),
      complete: () => this.showSuccess(),
    });
  }

  setPage(page: number): void {
    const max = Math.ceil(page);
    this.page = max;
    if (this.getActualMovies.length < page) {
      page = max;
    }
    this.actualMovies$ = this.getActualMovies();
  }

  showSuccess() {
    this.notifyService.showSuccess(
      'Item deleted successfully!',
      'FaMoBase v.1.0.0'
    );
  }

  showError(err: String) {
    this.notifyService.showError(
      'Something went wrong. Details: ' + err,
      'FaMoBase v.1.0.0'
    );
  }
}
