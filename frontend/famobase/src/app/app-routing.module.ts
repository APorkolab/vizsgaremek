import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'superheroes',
  //   component: SuperheroesComponent,
  // },
  // {
  //   path: 'marvel-universe/marvel-characters',
  //   component: MarvelCharactersComponent,
  // },
  // {
  //   path: 'marvel-universe/marvel-comics',
  //   component: MarvelComicsComponent,
  // },
  // {
  //   path: 'marvel-universe/marvel-stories',
  //   component: MarvelStoriesComponent,
  // },
  // {
  //   path: 'marvel-universe/marvel-events',
  //   component: MarvelEventsComponent,
  // },
  // {
  //   path: 'marvel-universe/marvel-creators',
  //   component: MarvelCreatorsComponent,
  // },
  // {
  //   path: 'users',
  //   component: UserComponent,
  // },
  // {
  //   path: 'superheroes/:id',
  //   component: SuperheroEditorComponent,
  // },
  // {
  //   path: 'marvel-universe/marvel-characters/:id',
  //   component: MarvelCharacterEditorComponent,
  // },
  // {
  //   path: 'marvel-universe/marvel-comics/:id',
  //   component: MarvelComicEditorComponent,
  // },
  // {
  //   path: 'marvel-universe/marvel-creators/:id',
  //   component: MarvelCreatorEditorComponent,
  // },
  // {
  //   path: 'marvel-universe/marvel-events/:id',
  //   component: MarvelEventEditorComponent,
  // },
  // {
  //   path: 'marvel-universe/marvel-stories/:id',
  //   component: MarvelStoryEditorComponent,
  // },
  // {
  //   path: 'users/:id',
  //   component: UserEditorComponent,
  // },
  // {
  //   path: 'superheroes-cards',
  //   component: SuperheroesCardsComponent,
  // },
  // {
  //   path: 'forbidden',
  //   component: ForbiddenComponent,
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: '**',
  //   component: HomeComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
