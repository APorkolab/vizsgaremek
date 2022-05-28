import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
// import { User } from 'src/app/model/user';
// import { AuthService } from 'src/app/service/auth.service';
// import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // user$: BehaviorSubject<User | null> = this.auth.currentUserSubject$;

  constructor() {}

  ngOnInit(): void {}

  // onLogout(): void {
  //   this.auth.logout();
  // }
}
