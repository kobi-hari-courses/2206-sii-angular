import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data
  keyword: string = '';
  results: string[] = [];
  isBusy: boolean = false;

  // actions
  enterKeyword(value: string) {
    this.keyword = value;
  }

  search() {
    this.isBusy = true;
    this.results = [];
    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        this.keyword + '1', 
        this.keyword + '2', 
        this.keyword + '3'
      ]
    }, 2000);
  }

}
