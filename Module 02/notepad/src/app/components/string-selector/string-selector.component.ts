import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent implements OnInit {
  @Input()
  options: string[] = [];

  @Input()
  selected: string = '';

  @Output()
  selection = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  whenUserClicks(value: string) {
    this.selection.emit(value);
  }

}
