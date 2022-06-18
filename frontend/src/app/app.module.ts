import { FamilyMembersEditorComponent } from './page/family-members-editor/family-members-editor.component';
import { MainActorsEditorComponent } from './page/main-actors-editor/main-actors-editor.component';
import { DirectorsEditorComponent } from './page/directors-editor/directors-editor.component';
import { WatchedMoviesEditorComponent } from './page/watched-movies-editor/watched-movies-editor.component';
import { IconModule } from './icon/icon.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './page/home/home.component';
import { DirectorsComponent } from './page/directors/directors.component';
import { MoviesComponent } from './page/movies/movies.component';
import { WatchedMoviesComponent } from './page/watched-movies/watched-movies.component';
import { MainActorsComponent } from './page/main-actors/main-actors.component';
import { FamilyMembersComponent } from './page/family-members/family-members.component';
import { DataTableModule } from './data-table/data-table.module';
import { ConfigService, IMenuItem } from './service/config.service';
import { MoviesEditorComponent } from './page/movies-editor/movies-editor.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    DirectorsComponent,
    MoviesComponent,
    WatchedMoviesComponent,
    MainActorsComponent,
    FamilyMembersComponent,
    MoviesEditorComponent,
    WatchedMoviesEditorComponent,
    DirectorsEditorComponent,
    MainActorsEditorComponent,
    FamilyMembersEditorComponent,
  ],
  imports: [
    DataTableModule,
    IconModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      onActivateTick: true,
      closeButton: true,
      preventDuplicates: true,
      timeOut: 5000,
      extendedTimeOut: 3000,
    }),
  ],
  exports: [FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  sidebar: IMenuItem[] = this.config.sidebarMenu;

  constructor(private config: ConfigService) {}
}
