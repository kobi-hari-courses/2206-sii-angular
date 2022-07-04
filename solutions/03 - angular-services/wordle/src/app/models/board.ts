import { BoardStatus } from "./board-status";
import { Guess } from "./guess";

export interface Board {
    readonly guesses: Guess[];
    readonly currentGuessIndex: number;
    readonly status: BoardStatus; 
}