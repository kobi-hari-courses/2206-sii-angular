import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchAll } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
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

  goNext() {
    const index = Number(this.route.snapshot.params['mispar']);
    this.router.navigate(['movies', index + 1]);
  }

  goPrev() {
    const index = Number(this.route.snapshot.params['mispar']);
    this.router.navigate(['movies', index - 1]);
  }

  goEdit() {
    const index = Number(this.route.snapshot.params['mispar']);
    this.router.navigate(['movies', index, 'edit']);
    
  }

}
