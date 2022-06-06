import { MainActorService } from './../../service/main-actor.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

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
    private mainActorService: MainActorService
  ) {}

  ngOnInit(): void {}
}
