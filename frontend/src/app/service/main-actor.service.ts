import { MainActor } from './../model/main-actor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicService } from './basic-service.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class MainActorService extends BasicService<MainActor> {
  constructor(http: HttpClient, config: ConfigService) {
    super(http, config);
    this.entity = 'main-actors';
  }
}
