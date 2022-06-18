import { MainActor } from './../../model/main-actor';
import { MainActorService } from './../../service/main-actor.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-actors',
  templateUrl: './main-actors.component.html',
  styleUrls: ['./main-actors.component.scss'],
})
export class MainActorsComponent implements OnInit {
  columns = this.config.mainActorColumn;
  list$ = this.mainActorService.getAll();

  constructor(
    private config: ConfigService,
    private mainActorService: MainActorService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelectOne(mainActor: MainActor): void {
    this.router.navigate(['/', 'main-actors', 'edit', mainActor._id]);
  }

  onDeleteOne(mainActor: MainActor): void {
    this.mainActorService
      .delete(mainActor)
      .subscribe(() => (this.list$ = this.mainActorService.getAll()));
  }
}
