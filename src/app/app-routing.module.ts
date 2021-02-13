import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './home/home.component';


import { WPlaylistComponent } from './w-playlist/w-playlist.component';
import { EnergyPlaylistComponent } from "./energy-playlist/energy-playlist.component";
import { EvolvingPlaylistComponent } from "./evolving-playlist/evolving-playlist.component";
import { FlowStateComponent } from "./flow-state/flow-state.component";
import { RelaxPlaylistComponent } from "./relax-playlist/relax-playlist.component";


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'wplaylist', component: WPlaylistComponent },
  { path: 'energy-playlist', component: EnergyPlaylistComponent },
  { path: 'Evolve-playlist', component: EvolvingPlaylistComponent },
  { path: 'relax-playlist', component: RelaxPlaylistComponent },
  { path: 'flowstate-playlist', component: FlowStateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingcomponents = [];    //optional 
