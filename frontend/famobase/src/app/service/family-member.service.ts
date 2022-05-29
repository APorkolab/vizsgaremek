import { FamilyMember } from './../model/family-member';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicService } from './basic-service.service';

@Injectable({
  providedIn: 'root',
})
export class DirectorService extends BasicService<FamilyMember> {
  constructor(http: HttpClient) {
    super(http);
    this.endString = 'familyMember';
  }
}
