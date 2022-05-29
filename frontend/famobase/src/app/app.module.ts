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
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { MoviesEditorComponent } from './page/movies-editor/movies-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MoviesComponent,
    DirectorsComponent,
    MainActorsComponent,
    WatchedFilmsComponent,
    FilterPipe,
    SortPipe,
    MoviesEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      onActivateTick: true,
      closeButton: true,
      // newestOnTop: true,
      // progressBar: true,
      preventDuplicates: true,
      timeOut: 5000,
      extendedTimeOut: 3000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
