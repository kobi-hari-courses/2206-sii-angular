import { Injectable } from '@angular/core';
import { WORDS } from '../models/all-words';
import { Board } from '../models/board';
import { Guess } from '../models/guess';
import { Cell } from '../models/cell';
import { CellStatus } from '../models/cell-status';
import { BoardStatus } from '../models/board-status';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private state!: Board;
  private secret!: string;

  constructor() {
    this.reset();
  }

  reset() {
    this.state = this.initialBoard();
    this.secret = this.randomWord();
  }

  getState() {
    return this.state;
  }

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async addGuess(guess: string): Promise<Board> {
    if (this.state.status !== 'In-Progress') return this.state;

    const cells = this.cellsOfGuess(guess, this.secret);
    const isCorrect = cells.every(c => c.status === 'Correct');

    const newGuesses = this.state.guesses.map((guess, index) => 
      (index !== this.state.currentGuessIndex) ? guess : ({
        cells: cells, 
        isCorrect: isCorrect, 
        isFilled: true
      }));

    const newStatus: BoardStatus = isCorrect ? 'Win' : 
      ((this.state.currentGuessIndex === this.state.guesses.length - 1) ? 'Lose' : 'In-Progress');

    const newBoard: Board = {
      currentGuessIndex: this.state.currentGuessIndex + 1, 
      guesses: newGuesses, 
      status: newStatus
    };

    await this.delay(3000);

    return newBoard;
  }

  cellsOfGuess(guess: string, secret: string): Cell[] {
    guess = guess.toUpperCase();
    const letters = guess
      .split('')
      .filter((_, index) => index < 5);

    const cells: Cell[] = letters.map((letter, index) => ({
      content: letter, 
      status: this.statusOfLetter(letter, index, secret)
    }));
    return cells;
  }

  statusOfLetter(letter: string, index: number, secret: string): CellStatus {
    if (!letter) return 'Empty';    
    if (secret.charAt(index) === letter) return 'Correct';
    if (secret.includes(letter)) return 'Misplaced';
    return 'Wrong';    
  }

  randomWord(): string {
    const index = Math.floor(Math.random() * WORDS.length);
    return WORDS[index].toUpperCase();
  }

  initialBoard(): Board {
    const guesses: Guess[] = Array(6).map(_ => ({
      isCorrect: false, 
      isFilled: false, 
      cells: Array(5).map(_ => ({
        content: '', 
        status: 'Empty'
      }))
    }))

    return {
      currentGuessIndex: 0, 
      guesses: guesses, 
      status: 'In-Progress'
    }
  }
}
