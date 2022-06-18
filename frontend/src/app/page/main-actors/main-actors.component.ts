import { MainActor } from './../../model/main-actor';
import { MainActorService } from './../../service/main-actor.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-main-actors',
  templateUrl: './main-actors.component.html',
  styleUrls: ['./main-actors.component.scss'],
})
export class MainActorsComponent implements OnInit {
  columns = this.config.mainActorColumn;
  list$ = this.mainActorService.getAll();
  entity = 'Main actor';

  constructor(
    private config: ConfigService,
    private mainActorService: MainActorService,
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

  onSelectOne(mainActor: MainActor): void {
    this.router.navigate(['/', 'main-actors', 'edit', mainActor._id]);
  }

  onDeleteOne(mainActor: MainActor): void {
    this.mainActorService.delete(mainActor).subscribe({
      next: () => (this.list$ = this.mainActorService.getAll()),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessDelete(),
    });
  }
}
