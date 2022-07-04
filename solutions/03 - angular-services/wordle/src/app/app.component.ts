import { Component } from '@angular/core';
import { Board } from './models/board';
import { CellStatus } from './models/cell-status';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  board!: Board;
  isBusy: boolean = false;
  isCompleted: boolean = false;
  isWin: boolean = false;
  isLose: boolean = false;
  guessCount: number = 0;
  secret: string = '';
  dictionary: [string, CellStatus][] = [];



  constructor(private gameService: GameService) {
    this.board = this.gameService.getState();
    this.invalidate();
  }

  invalidate() {
    this.isCompleted = this.board.status !== 'In-Progress';
    this.isWin = this.board.status === 'Win';
    this.isLose = this.board.status === 'Lose';
    this.guessCount = this.board.currentGuessIndex;
    this.secret = this.gameService.secret;
    this.dictionary = Object.entries(this.board.dictionary);
  }

  async addGuess(guess: string) {
    this.isBusy = true;
    this.board = await this.gameService.addGuess(guess);
    this.invalidate();
    this.isBusy = false;
  }

  async reset() {
    this.gameService.reset();
    this.board = this.gameService.getState();
    this.invalidate();
  }
}
