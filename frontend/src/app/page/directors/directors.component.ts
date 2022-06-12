import { DirectorService } from './../../service/director.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

import { Director } from '../../model/director';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss'],
})
export class DirectorsComponent implements OnInit {
  columns = this.config.directorColumn;
  list$ = this.directorService.getAll();

  constructor(
    private config: ConfigService,
    private directorService: DirectorService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelectOne(director: Director): void {
    this.router.navigate(['/', 'directors', director._id]);
  }

  onDeleteOne(director: Director): void {
    this.directorService
      .delete(director)
      .subscribe(() => (this.list$ = this.directorService.getAll()));
  }
}
