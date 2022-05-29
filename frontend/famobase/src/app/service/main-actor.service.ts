import { MainActor } from './../model/main-actor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicService } from './basic-service.service';

@Injectable({
  providedIn: 'root',
})
export class MainActorService extends BasicService<MainActor> {
  constructor(http: HttpClient) {
    super(http);
    this.entity = 'mainActor';
  }
}
