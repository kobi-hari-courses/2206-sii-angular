import { Component } from '@angular/core';
import { Board } from './models/board';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  board!: Board;

  constructor(private gameService: GameService) {
    this.board = this.gameService.getState();
  }

  async addGuess(guess: string) {
    this.board = await this.gameService.addGuess(guess);
  }
}
