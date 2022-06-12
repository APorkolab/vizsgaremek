import { FamilyMember } from './../model/family-member';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from './config.service';
import { BasicService } from './basic-service.service';

@Injectable({
  providedIn: 'root',
})
export class FamilyMemberService extends BasicService<FamilyMember> {
  constructor(http: HttpClient, config: ConfigService) {
    super(http, config);
    this.entity = 'family-members';
  }
}
