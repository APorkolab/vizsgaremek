import { FamilyMemberService } from './../../service/family-member.service';
import { FamilyMember } from 'src/app/model/family-member';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-family-members-editor',
  templateUrl: './family-members-editor.component.html',
  styleUrls: ['./family-members-editor.component.scss'],
})
export class FamilyMembersEditorComponent implements OnInit {
  familyMember$!: Observable<FamilyMember>;
  familyMember: FamilyMember = new FamilyMember();
  entity = 'Family member';

  constructor(
    private familyMemberService: FamilyMemberService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) => {
        if (param['id'] == '0') {
          return of(new FamilyMember());
        }
        this.familyMember$ = this.familyMemberService.getOne(param['id']);
        return this.familyMemberService.getOne(param['id']);
      },
    });
    this.familyMember$.subscribe({
      next: (familyMember) =>
        (this.familyMember = familyMember ? familyMember : this.familyMember),
    });
  }

  onUpdate(familyMember: FamilyMember) {
    this.familyMemberService.update(familyMember).subscribe({
      next: (category) => this.router.navigate(['/', 'family-members']),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessEdit(),
    });
  }

  onCreate(familyMember: FamilyMember) {
    this.familyMemberService.create(familyMember).subscribe({
      next: (category) => this.router.navigate(['/', 'family-members']),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessCreate(),
    });
  }

  showSuccessEdit() {
    this.notifyService.showSuccess(
      `${this.entity} edited successfully!`,
      'FaMoBase v.1.0.0'
    );
  }

  showSuccessCreate() {
    this.notifyService.showSuccess(
      `${this.entity} created successfully!`,
      'FaMoBase v.1.0.0'
    );
  }

  showError(err: String) {
    this.notifyService.showError(
      'Something went wrong. Details:' + err,
      'FaMoBase v.1.0.0'
    );
  }
}
