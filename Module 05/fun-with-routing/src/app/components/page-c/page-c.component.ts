import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css']
})
export class PageCComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    if (value === 'abcd') {
      this.router.navigate(['a']);
    }
  }

}
