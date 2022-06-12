import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { BasicService } from './basic-service.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService extends BasicService<Movie> {
  constructor(http: HttpClient, config: ConfigService) {
    super(http, config);
    this.entity = 'movies';
  }

  // getAll(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(`${this.apiUrl}/movies`);
  // }
}
