import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

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

    let p = this.createPromise();
    console.log('2');

    let res = await p;

    console.log('3');

    console.log(`Promise completed with result ${res}`);
    return true;
  }

}
