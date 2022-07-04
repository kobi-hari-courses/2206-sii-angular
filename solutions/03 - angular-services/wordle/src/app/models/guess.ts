import { Cell } from "./cell";

export interface Guess {
    readonly cells: Cell[];
    readonly isCorrect: boolean;
    readonly isFilled: boolean;
}