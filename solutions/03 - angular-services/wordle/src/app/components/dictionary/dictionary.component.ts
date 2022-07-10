import { Component, Input, OnInit } from '@angular/core';
import { CellStatus } from 'src/app/models/cell-status';
import { Dictionary } from 'src/app/models/dictionary';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  @Input()
  dictionary: [string, CellStatus][] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
