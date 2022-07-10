import { CellStatus } from "./cell-status";

export interface Cell {
    readonly status: CellStatus;
    readonly content: string;
}