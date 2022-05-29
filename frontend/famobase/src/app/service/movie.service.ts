import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicService } from './basic-service.service';
import { Movie } from './../model/movie';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService extends BasicService<Movie> {
  constructor(http: HttpClient) {
    super(http);
    this.endString = 'movie';
  }
}
