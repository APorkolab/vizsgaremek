import { Component, OnInit } from '@angular/core';
import { FamilyMember } from 'src/app/model/family-member';
import { ConfigService } from 'src/app/service/config.service';
import { FamilyMemberService } from 'src/app/service/family-member.service';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.scss'],
})
export class FamilyMembersComponent implements OnInit {
  columns = this.config.familyMemberColumn;
  list$ = this.familyMemberService.getAll();

  constructor(
    private config: ConfigService,
    private familyMemberService: FamilyMemberService
  ) {}

  ngOnInit(): void {}
}
