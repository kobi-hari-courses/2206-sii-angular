import { Board } from '../models/board';
import { BoardStatus } from '../models/board-status';
import { Cell } from '../models/cell';
import { CellStatus } from '../models/cell-status';
import { Dictionary } from '../models/dictionary';
import { Guess } from '../models/guess';

/*
    Pure functions that help calculate entity values
*/

// calculates a new Board entity with the initial state of the game
export function initialBoard(): Board {
  const guesses: Guess[] = Array(6)
    .fill(0)
    .map((_) => ({
      isCorrect: false,
      isFilled: false,
      cells: Array(5)
        .fill(0)
        .map((_) => ({
          content: '',
          status: 'Empty',
        })),
    }));

  let res: Board = {
    currentGuessIndex: 0,
    guesses: guesses,
    status: 'In-Progress',
    dictionary: initialDictionary()
  };
  return res;
}

// calculates the status of a cell according to the letter, the index, and the current secret
export function statusOfLetter(
  letter: string,
  index: number,
  secret: string
): CellStatus {
  if (!letter) return 'Empty';
  if (secret.charAt(index) === letter) return 'Correct';
  if (secret.includes(letter)) return 'Misplaced';
  return 'Wrong';
}

// converts a new guess into an array of cells
export function cellsOfGuess(guess: string, secret: string): Cell[] {
  guess = guess.toUpperCase();
  const letters = guess.split('').filter((_, index) => index < 5);

  const cells: Cell[] = letters.map((letter, index) => ({
    content: letter,
    status: statusOfLetter(letter, index, secret),
  }));
  return cells;
}

export function boardWithNewGuess(
  board: Board,
  guess: string,
  secret: string
): Board {
  if (board.status !== 'In-Progress') return board;

  const cells = cellsOfGuess(guess, secret);
  const isCorrect = cells.every((c) => c.status === 'Correct');

  const newGuesses = board.guesses.map((guess, index) =>
    index !== board.currentGuessIndex
      ? guess
      : {
          cells: cells,
          isCorrect: isCorrect,
          isFilled: true,
        }
  );

  const newStatus: BoardStatus = isCorrect
    ? 'Win'
    : board.currentGuessIndex === board.guesses.length - 1
    ? 'Lose'
    : 'In-Progress';

  const newDictionary = cells.reduce((dict, cell) => ({
    ...dict, 
    [cell.content]: cell.status
  }), board.dictionary);

  const newBoard: Board = {
    currentGuessIndex: board.currentGuessIndex + 1,
    guesses: newGuesses,
    status: newStatus,
    dictionary: newDictionary
  };

  return newBoard;
}

export function initialDictionary(): Dictionary {
  const alpha = new Array(26)
    .fill(0)
    .map((_, index) => String.fromCharCode(index + 65));

  const pairs = alpha.map(letter => [letter, 'Empty']);
  return Object.fromEntries(pairs);
}


export function fakeInitialBoard(): Board {
  let res: Board = initialBoard();
  res = boardWithNewGuess(res, 'black', 'JOKER');
  res = boardWithNewGuess(res, 'price', 'JOKER');
  res = boardWithNewGuess(res, 'poker', 'JOKER');
  res = boardWithNewGuess(res, 'black', 'JOKER');
  res = boardWithNewGuess(res, 'price', 'JOKER');
  res = boardWithNewGuess(res, 'toker', 'JOKER');
  return res;
}
