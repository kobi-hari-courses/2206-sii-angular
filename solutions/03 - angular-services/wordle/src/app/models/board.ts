import { BoardStatus } from "./board-status";
import { CellStatus } from "./cell-status";
import { Dictionary } from "./dictionary";
import { Guess } from "./guess";

export interface Board {
    readonly guesses: Guess[];
    readonly currentGuessIndex: number;
    readonly status: BoardStatus; 
    readonly dictionary: Dictionary;
}