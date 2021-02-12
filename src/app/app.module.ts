import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


//services & components & routes
import { TaskService} from './services/task.service';

import { TodoComponent } from './todo/todo.component';
import { WPlaylistComponent } from './w-playlist/w-playlist.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule,routingcomponents  } from './app-routing.module';
import { FlowStateComponent } from './flow-state/flow-state.component';
import { EnergyPlaylistComponent } from './energy-playlist/energy-playlist.component';
import { RelaxPlaylistComponent } from './relax-playlist/relax-playlist.component';
import { EvolvingPlaylistComponent } from './evolving-playlist/evolving-playlist.component';



  
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    routingcomponents,
    WPlaylistComponent,
    HomeComponent,
    FlowStateComponent,
    EnergyPlaylistComponent,
    RelaxPlaylistComponent,
    EvolvingPlaylistComponent
  ],
  imports: [
    BrowserModule , FormsModule,
    HttpClientModule ,
     AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
