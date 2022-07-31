import { Directive, ElementRef, OnInit, Optional } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Directive({
  selector: 'h1, h2'
})
export class TitleTooltipDirective implements OnInit {

  constructor(
    private elem: ElementRef, 
    @Optional() private highlight: HighlightDirective | null    
    ) {
    console.log('title directive created');
  }

  ngOnInit(): void {
    let content = this.elem.nativeElement.innerText as string;

    console.log(this.highlight);
    if (this.highlight) content = content.toUpperCase();

    this.elem.nativeElement.title = content;    
  }

}
