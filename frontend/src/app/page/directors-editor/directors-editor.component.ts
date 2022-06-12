import { DirectorService } from './../../service/director.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Director } from 'src/app/model/director';
import { NotificationService } from 'src/app/service/notification.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-directors-editor',
  templateUrl: './directors-editor.component.html',
  styleUrls: ['./directors-editor.component.scss'],
})
export class DirectorsEditorComponent implements OnInit {
  director$!: Observable<Director>;

  director: Director = new Director();

  constructor(
    private directorService: DirectorService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) =>
        (this.director$ = this.directorService.getOne(param['id'])),
    });
    this.director$.subscribe({
      next: (director) => (this.director = director ? director : this.director),
    });
  }

  onUpdate(director: Director) {
    this.directorService
      .update(director)
      .subscribe(() => this.router.navigate(['/', 'directors']));
  }

  //     {
  //     next: (category) => this.router.navigate(['/', 'movies']),
  //     error: (err) => this.showError(err),
  //     complete: () => this.showSuccessEdit(),
  //   });
  // }

  onCreate(director: Director) {
    this.directorService
      .create(director)
      .subscribe(() => this.router.navigate(['/', 'directors']));
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
