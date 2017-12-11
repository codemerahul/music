import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";


import { AppComponent } from "./app.component";
import { GenresAppComponent } from "./components/genre/genres.component";
import { TracksAppComponent } from "./components/track/tracks.component";
export const router:Routes = [
{
    
    path:'', redirectTo: ' ' , pathMatch:'full' },
    { path: 'genre', component: GenresAppComponent},
    { path: 'tracks', component: TracksAppComponent }

];

export const routes: ModuleWithProviders=RouterModule.forRoot(router);