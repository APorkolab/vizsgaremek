import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MoviesComponent } from './page/movies/movies.component';
import { DirectorsComponent } from './page/directors/directors.component';
import { MainActorsComponent } from './page/main-actors/main-actors.component';
import { WatchedFilmsComponent } from './page/watched-films/watched-films.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MoviesComponent,
    DirectorsComponent,
    MainActorsComponent,
    WatchedFilmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
