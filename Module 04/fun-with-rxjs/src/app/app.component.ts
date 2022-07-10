import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, of, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createObserver(id: string): Observer<number> {
    return {
      next: val => console.log(`observer ${id} next ${val}`), 
      complete: () => console.log(`observer ${id} complete`), 
      error: err => console.log(`observer ${id} error ${err}`)
    }
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createConstantObservable(): Observable<number> {
    return of(42, 100, 200);
  }

  createCustomObservable(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(42);
      setTimeout(() => observer.next(100), 2000);
      setTimeout(() => observer.next(200), 4000);
      setTimeout(() => observer.next(300), 7000);
      setTimeout(() => observer.complete(), 10000);

    });
  }

  createCustomSubject(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(42);
    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 7000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }

  createCustomBehaviorSubject(): Observable<number> {
    const subject = new BehaviorSubject<number>(42);

    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 7000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }

  createCustomReplaySubject(): Observable<number> {
    const subject = new ReplaySubject<number>(3, 2000);

    subject.next(42);

    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 7000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');

    const observable = this.createCustomReplaySubject();

    observable.subscribe(observerA);

    setTimeout(() => observable.subscribe(observerB), 3500);
    
  }
}


