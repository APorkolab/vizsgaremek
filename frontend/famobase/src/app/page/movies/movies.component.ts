import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

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
  column: string = '_id';

  type: string | number = 'number';
  length: number = 0;
  actualMovies$: Observable<Movie[]> = this.getActualMovies();

  setSortParams(direction: string, column: string, type: string) {
    this.direction = direction;
    let key =
      this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
      '_id';
    this.column = key;
    this.type = typeof new Movie()[key];
  }
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies$.subscribe({
      next: (movies) => {
        this.length = movies.length;
      },
    });
  }

  getActualMovies(): Observable<Movie[]> {
    return this.movies$.pipe(
      map((movie) => movie.slice((this.page - 1) * 50, this.page * 50))
    );
  }

  onDelete(movie: Movie) {
    this.movieService.delete(movie).subscribe(
      (bill) => (this.movies$ = this.movieService.getAll()),
      (err) => console.log(err),
      () => console.log('deleted')
    );
  }

  setPage(page: number): void {
    this.page = Math.ceil(page);
    this.actualMovies$ = this.getActualMovies();
  }
}