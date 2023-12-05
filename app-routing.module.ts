import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { MusicListComponent } from './Components/music-list/music-list.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { SongPageComponent } from './Components/song-page/song-page.component';
import { InfoPageComponent } from './Components/info-page/info-page.component';

const routes: Routes = [
    {path: "homepage", component: HomePageComponent},
    {path: "homepage/music", component: MusicListComponent},
    {path: "homepage/song", component: SongPageComponent},
    {path: "homepage/song/info", component: InfoPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
