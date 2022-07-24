import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) { }

  private getAllMovies(): Promise<Movie[]> {
    const url = `${environment.baseUrl}/movies`;
    const res = firstValueFrom(this.http.get<Movie[]>(url))
    return res;
  }

  async getMoviesCount(): Promise<number> {
    const list = await this.getAllMovies();
    return list.length;
  }

  async getMovieByIndex(index: number): Promise<Movie> {
    const list = await this.getAllMovies();
    return list[index];
  }

  async getMovieCaptions(): Promise<string[]> {
    const list = await this.getAllMovies();
    return list.map(m => m.caption);
  }
}
