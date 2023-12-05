import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './Components/box/box.component';
import { HeaderComponent } from './Components/header/header.component';
import { HttpClientModule } from '@angular/common/http'
import { MusicComponent } from './Components/music/music.component';
import { MusicListComponent } from './Components/music-list/music-list.component';
import { BoxListComponent } from './Components/box-list/box-list.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { Box2Component } from './Components/box2/box2.component';
import { Box2ListComponent } from './Components/box2-list/box2-list.component';
import { SongPageComponent } from './Components/song-page/song-page.component';
import { InfoPageComponent } from './Components/info-page/info-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    HeaderComponent,
    MusicComponent,
    MusicListComponent,
    BoxListComponent,
    HomePageComponent,
    Box2Component,
    Box2ListComponent,
    SongPageComponent,
    InfoPageComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
