import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent }  from './app.component';
import { routes } from "./app.router";
import { TasksAppComponent } from './components/tasks/tasks.component';
import { GenresAppComponent } from './components/genre/genres.component';
import { TracksAppComponent } from './components/track/tracks.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [BrowserModule,
    HttpModule, FormsModule,
    routes ],
  declarations: [AppComponent, TasksAppComponent, GenresAppComponent, TracksAppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
