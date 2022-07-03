import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    history: string[] = [];

    constructor() {
        console.log('History Service Created');
    }

    audit(txt: string) {
        this.history.push(txt);
        console.log(this.history);
    }
}