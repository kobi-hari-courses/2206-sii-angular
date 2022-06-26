import { Component, AfterViewInit, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from "@angular/core";

@Component({
    selector: 'app-title', 
    templateUrl: './app-title.component.html', 
    styleUrls: ['./app-title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    @Input()
    caption: string = 'Foo Bar';

    @Input()
    color: string = '';

    constructor() {
        console.log('constructor is running', this.color);
    }

    ngOnInit(): void {
        console.log('on init is running', this.color);        
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('on changes', changes);
        
    }

    ngOnDestroy(): void {
        console.log('Destroying component');
    }

    ngAfterViewInit(): void {
        console.log('The template was created');
    }

}