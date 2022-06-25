import { DirectorService } from './../../service/director.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Director } from '../../model/director';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-directors-editor',
  templateUrl: './directors-editor.component.html',
  styleUrls: ['./directors-editor.component.scss'],
})
export class DirectorsEditorComponent implements OnInit {
  director$!: Observable<Director>;
  director: Director = new Director();
  entity = 'Director';

  constructor(
    private directorService: DirectorService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) => {
        if (param['id'] == '0') {
          return of(new Director());
        }
        this.director$ = this.directorService.getOne(param['id']);
        return this.directorService.getOne(param['id']);
      },
    });
    this.director$.subscribe({
      next: (director) => (this.director = director ? director : this.director),
    });
  }

  onUpdate(director: Director) {
    this.directorService.update(director).subscribe({
      next: (category) => this.router.navigate(['/', 'directors']),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessEdit(),
    });
  }

  onCreate(director: Director) {
    this.directorService.create(director).subscribe({
      next: (category) => this.router.navigate(['/', 'directors']),
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
