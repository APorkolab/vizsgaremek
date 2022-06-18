import { FamilyMemberService } from './../../service/family-member.service';
import { NotificationService } from 'src/app/service/notification.service';
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
  entity: string = 'Family Member';

  constructor(
    private config: ConfigService,
    private familyMemberService: FamilyMemberService,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {}
  showSuccessDelete() {
    this.notifyService.showSuccess(
      `${this.entity} delete successfully!`,
      'FaMoBase v.1.0.0'
    );
  }

  showError(err: String) {
    this.notifyService.showError(
      'Something went wrong. Details:' + err,
      'FaMoBase v.1.0.0'
    );
  }

  onSelectOne(familyMember: FamilyMember): void {
    this.router.navigate(['/', 'family-members', 'edit', familyMember._id]);
  }

  onDeleteOne(familyMember: FamilyMember): void {
    this.familyMemberService.delete(familyMember).subscribe({
      next: () => (this.list$ = this.familyMemberService.getAll()),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessDelete(),
    });
  }
}
