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



  
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    routingcomponents,
    WPlaylistComponent,
    HomeComponent
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
