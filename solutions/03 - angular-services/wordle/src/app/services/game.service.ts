import { Injectable } from '@angular/core';
import { WORDS } from '../models/all-words';
import { Board } from '../models/board';
import { Guess } from '../models/guess';
import { Cell } from '../models/cell';
import { CellStatus } from '../models/cell-status';
import { BoardStatus } from '../models/board-status';
import { boardWithNewGuess, fakeInitialBoard, initialBoard } from './board-helpers';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private state!: Board;
  public secret!: string;

  constructor() {
    this.reset();
  }

  reset() {
    this.state = initialBoard();
    this.secret = this.randomWord();
  }

  getState() {
    return this.state;
  }

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async addGuess(guess: string): Promise<Board> {
    await this.delay(3000);
    this.state = boardWithNewGuess(this.state, guess, this.secret);
    return this.state;
  }


  // returns a random word from the list of possible words
  randomWord(): string {
    const index = Math.floor(Math.random() * WORDS.length);
    return WORDS[index].toUpperCase();
  }

}
