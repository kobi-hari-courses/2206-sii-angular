import { Component, OnInit, Input } from '@angular/core';
import { Cell } from 'src/app/models/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input()
  cell: Cell | null = null;

  @Input()
  isSmall: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
