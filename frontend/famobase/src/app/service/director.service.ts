import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicService } from './basic-service.service';
import { Director } from '../model/director';

@Injectable({
  providedIn: 'root',
})
export class DirectorService extends BasicService<Director> {
  constructor(http: HttpClient) {
    super(http);
    this.entity = 'director';
  }
}
