import { FamilyMemberService } from './../../service/family-member.service';
import { Component, OnInit } from '@angular/core';
import { FamilyMember } from 'src/app/model/family-member';
import { ConfigService } from 'src/app/service/config.service';
import { Router } from '@angular/router';

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
    private familyMemberService: FamilyMemberService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelectOne(familyMember: FamilyMember): void {
    this.router.navigate(['/', 'family-members', 'edit', familyMember._id]);
  }

  onDeleteOne(familyMember: FamilyMember): void {
    this.familyMemberService
      .delete(familyMember)
      .subscribe(() => (this.list$ = this.familyMemberService.getAll()));
  }
}
