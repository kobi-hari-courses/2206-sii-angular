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

  getAllMovies(): Promise<Movie[]> {
    const url = `${environment.baseUrl}/movies`;
    const res = firstValueFrom(this.http.get<Movie[]>(url))
    return res;
  }
}
