import { MainActorService } from './../../service/main-actor.service';
import { MainActor } from './../../model/main-actor';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(
    private mainActorService: MainActorService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) =>
        (this.mainActor$ = this.mainActorService.getOne(param['id'])),
    });
    this.mainActor$.subscribe({
      next: (mainActor) =>
        (this.mainActor = mainActor ? mainActor : this.mainActor),
    });
  }

  onUpdate(mainActor: MainActor) {
    this.mainActorService
      .update(mainActor)
      .subscribe(() => this.router.navigate(['/', 'main-actors']));
  }

  //     {
  //     next: (category) => this.router.navigate(['/', 'movies']),
  //     error: (err) => this.showError(err),
  //     complete: () => this.showSuccessEdit(),
  //   });
  // }

  onCreate(mainActor: MainActor) {
    this.mainActorService
      .create(mainActor)
      .subscribe(() => this.router.navigate(['/', 'main-actors']));
  }

  // showSuccessEdit() {
  //   this.notifyService.showSuccess(
  //     'Item edited successfully!',
  //     'FaMoBase v.1.0.0'
  //   );
  // }

  // showSuccessCreate() {
  //   this.notifyService.showSuccess(
  //     'Item created successfully!',
  //     'FaMoBase v.1.0.0'
  //   );
  // }

  // showError(err: String) {
  //   this.notifyService.showError(
  //     'Something went wrong. Details:' + err,
  //     'FaMoBase v.1.0.0'
  //   );
  // }
}
