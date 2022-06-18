import { MainActorService } from './../../service/main-actor.service';
import { MainActor } from './../../model/main-actor';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-main-actors-editor',
  templateUrl: './main-actors-editor.component.html',
  styleUrls: ['./main-actors-editor.component.scss'],
})
export class MainActorsEditorComponent implements OnInit {
  mainActor$!: Observable<MainActor>;
  mainActor: MainActor = new MainActor();
  entity = 'Main actor';

  constructor(
    private mainActorService: MainActorService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) => {
        if (param['id'] == '0') {
          return of(new MainActor());
        }
        this.mainActor$ = this.mainActorService.getOne(param['id']);
        return this.mainActorService.getOne(param['id']);
      },
    });
    this.mainActor$.subscribe({
      next: (mainActor) =>
        (this.mainActor = mainActor ? mainActor : this.mainActor),
    });
  }

  onUpdate(mainActor: MainActor) {
    this.mainActorService.update(mainActor).subscribe({
      next: (category) => this.router.navigate(['/', 'main-actors']),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessEdit(),
    });
  }

  onCreate(mainActor: MainActor) {
    this.mainActorService.create(mainActor).subscribe({
      next: (category) => this.router.navigate(['/', 'main-actors']),
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
