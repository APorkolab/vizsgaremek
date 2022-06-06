import { IconModule } from './icon/icon.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipePipe } from './pipe/sorter.pipe';

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
    FilterPipe,
    SorterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IconModule,
    DataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  sidebar: IMenuItem[] = this.config.sidebarMenu;

  constructor(private config: ConfigService) {}
}
