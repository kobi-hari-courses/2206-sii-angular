import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createPromise(): Promise<number> {
    console.log('Starting to count 4 seconds');

    return new Promise<number>((resolve, reject) => {
      setTimeout(() => resolve(42), 4000);
    });
  }

  // go() {
  //   let p = this.createPromise();

  //   let q = p.then(res => {
  //     console.log(`Promise completed with result ${res}`);
  //     return false;
  //   });
  // }

  async go() {
    console.log('A');
    await this.start();
    console.log('B');
  }

  async start() {
    console.log('1');

    let p = this.createRandomInProgressPromise();
    console.log('2');

    let res = await p;

    console.log('3');

    console.log(`Promise completed with result ${res}`);
    return true;
  }

  async go2() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let promises = arr.map(i => this.createRandomInProgressPromise());

    console.log('All promises are running');

    let pAll = Promise.all(promises);
    let resAll = await pAll;

    let pAny = Promise.race(promises);

    console.log(`all promises completed, their results are ${resAll}`);

  }

  createCompletedPromoise() {
    return Promise.resolve(10);
  }

  createFaultedPromise() {
    return Promise.reject<number>('Oy basa');
  }

  createRandomInProgressPromise(): Promise<number> {
    let delay = Math.random() * 4000 + 1000; // delay between 1000 and 5000
    let res = Math.ceil(Math.random() * 20 + 40); // result between 40 and 60

    return new Promise((success, failure) => {
      setTimeout(() => success(res), delay);
    });
  }

  protected isPromiseInProgress: boolean = false;
  protected promiseResolver: (n: number) => void = _ => {}

  createPromiseThatEndsWhenTheUserClicksTheButton(): Promise<number> {
    this.isPromiseInProgress = true;
    return new Promise<number>((resolve, reject) => {
      this.promiseResolver = resolve;
    });
  }

  completeCurrentPromise(result: number) {
    this.promiseResolver(result);
    this.promiseResolver = _ => {};
  }

}
