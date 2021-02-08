import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WPlaylistComponent } from './w-playlist/w-playlist.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 
  {      path:''          ,        component:HomeComponent },
  {     path :'wplaylist' ,   component: WPlaylistComponent}  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingcomponents = [];