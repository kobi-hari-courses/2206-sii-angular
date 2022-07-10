import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent implements OnInit, OnDestroy {

  counter: number = -1;
  sub!: Subscription;
   

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.sub = this.counterService.getValue().subscribe(val => {
      console.log(`value changed to ${val}`);
      this.counter = val;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
