import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit {
  isExpanded: boolean = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor() { }

  ngOnInit(): void {
    console.log('Expander created');
  }

}
