import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of, Subject, map, mergeAll, switchAll, merge, shareReplay } from 'rxjs';
import { Color } from './models/color.model';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  search$ = new Subject<string>();
  results$!: Observable<Color[]>;
  isBusy$!: Observable<boolean>

  constructor(
    private colorsService: ColorsService
  ){}

  ngOnInit() {
    this.results$ = this.search$.pipe(
      map(kw => this.colorsService.search(kw)), 
      switchAll(), 
    );

    const true$ = this.search$.pipe(
      map(_ => true)
    );

    const false$ = this.results$.pipe(
      map(_ => false)
    );

    this.isBusy$ = merge(true$, false$);
  }
  
}
