import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchAll } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie$!: Observable<Movie>


  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    const index$ = this.route.params.pipe(
      map(prm => Number(prm['mispar']))
     );

     this.movie$ = index$.pipe(
      map(index => this.dataService.getMovieByIndex(index)), 
      switchAll()
     )
  }

}
