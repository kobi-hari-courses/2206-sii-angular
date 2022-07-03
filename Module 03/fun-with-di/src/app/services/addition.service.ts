import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable()
export class AdditionService {
    id: number;

    constructor(private historyService: HistoryService) {
        this.id = Math.ceil(Math.random() * 10000000);
        console.log('Addition Service created, id = ', this.id);
    }

    add(op1: number, op2: number): number {
        this.historyService.audit(`Adding the numbers ${op1} and ${op2}`);
        return op1 + op2;
    }
}