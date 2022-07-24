import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccontComponent } from './components/accont/accont.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, 
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesListComponent}, 
  { path: 'movies/:mispar', component: MovieDetailsComponent},
  { path: 'account', component: AccontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
