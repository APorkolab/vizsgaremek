import { environment } from './../../environments/environment';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Director } from '../model/director';
import { HttpClient } from '@angular/common/http';
import { BasicService } from './basic-service.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class DirectorService extends BasicService<Director> {
  constructor(http: HttpClient, config: ConfigService) {
    super(http, config);
    this.entity = 'directors';
  }
}