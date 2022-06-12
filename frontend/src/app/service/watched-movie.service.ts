import { WatchedMovie } from './../model/watched-movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicService } from './basic-service.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class WatchedMovieService extends BasicService<WatchedMovie> {
  constructor(http: HttpClient, config: ConfigService) {
    super(http, config);
    this.entity = 'watched-movies';
  }

  // getAll(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(`${this.apiUrl}/movies`);
  // }
}
