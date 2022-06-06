import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { DirectorService } from 'src/app/service/director.service';

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
    private directorService: DirectorService
  ) {}

  ngOnInit(): void {}
}
