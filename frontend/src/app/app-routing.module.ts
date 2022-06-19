import { AuthGuardService } from './service/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMembersEditorComponent } from './page/family-members-editor/family-members-editor.component';
import { MainActorsEditorComponent } from './page/main-actors-editor/main-actors-editor.component';
import { DirectorsEditorComponent } from './page/directors-editor/directors-editor.component';
import { WatchedMoviesEditorComponent } from './page/watched-movies-editor/watched-movies-editor.component';
import { FamilyMembersComponent } from './page/family-members/family-members.component';
import { MainActorsComponent } from './page/main-actors/main-actors.component';
import { DirectorsComponent } from './page/directors/directors.component';
import { WatchedMoviesComponent } from './page/watched-movies/watched-movies.component';
import { MoviesComponent } from './page/movies/movies.component';
import { HomeComponent } from './page/home/home.component';
import { MoviesEditorComponent } from './page/movies-editor/movies-editor.component';
import { LoginComponent } from './page/login/login.component';
import { RoleGuardService } from './service/role-guard.service';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1,
    },
  },
  {
    path: 'movies/edit/:id',
    component: MoviesEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: 'movies/edit/0',
    component: MoviesEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: 'watched-movies',
    component: WatchedMoviesComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1,
    },
  },
  {
    path: 'watched-movies/edit/:id',
    component: WatchedMoviesEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: 'watched-movies/edit/0',
    component: WatchedMoviesEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: 'directors',
    component: DirectorsComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1,
    },
  },
  {
    path: 'directors/edit/:id',
    component: DirectorsEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: 'directors/edit/0',
    component: DirectorsEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: 'main-actors',
    component: MainActorsComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 1,
    },
  },
  {
    path: 'main-actors/edit/:id',
    component: MainActorsEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: 'main-actors/edit/0',
    component: MainActorsEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: 'family-members',
    component: FamilyMembersComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: 'family-members/edit/:id',
    component: FamilyMembersEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: 'family-members/edit/0',
    component: FamilyMembersEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: 3,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
