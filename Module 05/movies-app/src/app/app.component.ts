import { Component } from '@angular/core';
import { Movie } from './models/movie.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: Movie[] | null = null;

  constructor(private dataService: DataService) {}

  async go() {
    this.result = await this.dataService.getAllMovies();
  }
}
