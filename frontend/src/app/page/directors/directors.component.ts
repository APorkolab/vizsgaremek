import { Director } from './../../model/director';
import { NotificationService } from 'src/app/service/notification.service';
import { DirectorService } from './../../service/director.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss'],
})
export class DirectorsComponent implements OnInit {
  columns = this.config.directorColumn;
  list$ = this.directorService.getAll();
  entity: string = 'Director';

  constructor(
    private config: ConfigService,
    private directorService: DirectorService,
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

  onSelectOne(director: Director): void {
    this.router.navigate(['/', 'directors', 'edit', director._id]);
  }

  onDeleteOne(director: Director) {
    this.directorService.delete(director).subscribe({
      next: () => (this.list$ = this.directorService.getAll()),
      error: (err) => this.showError(err),
      complete: () => this.showSuccessDelete(),
    });
  }
}
