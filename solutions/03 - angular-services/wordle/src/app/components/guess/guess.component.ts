import { Component, Input, OnInit } from '@angular/core';
import { Guess } from 'src/app/models/guess';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  @Input()
  guess: Guess | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
