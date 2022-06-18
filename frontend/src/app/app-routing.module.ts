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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/edit/:id',
    component: MoviesEditorComponent,
  },
  {
    path: 'watched-movies',
    component: WatchedMoviesComponent,
  },
  {
    path: 'watched-movies/edit/:id',
    component: WatchedMoviesEditorComponent,
  },
  {
    path: 'directors',
    component: DirectorsComponent,
  },
  {
    path: 'directors/edit/:id',
    component: DirectorsEditorComponent,
  },
  {
    path: 'main-actors',
    component: MainActorsComponent,
  },
  {
    path: 'main-actors/edit/:id',
    component: MainActorsEditorComponent,
  },
  {
    path: 'family-members',
    component: FamilyMembersComponent,
  },
  {
    path: 'family-members/edit/:id',
    component: FamilyMembersEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
