import { WatchedMovie } from './../model/watched-movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicService } from './basic-service.service';

@Injectable({
  providedIn: 'root',
})
export class MainActorService extends BasicService<WatchedMovie> {
  constructor(http: HttpClient) {
    super(http);
    this.entity = 'watchedMovie';
  }
}
