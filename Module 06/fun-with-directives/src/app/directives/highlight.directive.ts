import { EventEmitter, HostBinding, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]', 
  exportAs: 'hadgasha'
})
export class HighlightDirective {
  private _wasClicked = false;

  public get wasClicked(): boolean {
    return this._wasClicked;
  }


  @Input('highlight')
  @HostBinding('style.background-color')
  bg: string = 'yellow';


  @Output()
  vanished = new EventEmitter<string>();

  @HostBinding('style.transition')
  trans: string = '1s';

  @HostListener('click')
  onClick() {
    if (this._wasClicked) return;
    this._wasClicked = true;
    this.vanished.emit(this.bg);
    this.bg = '';
  }

  constructor(
    private elem: ElementRef, 
    private renderer: Renderer2
  ) { 
    console.log('Highlight Directive Created');
    // this.elem.nativeElement.style.backgroundColor='yellow';
    //this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'pink');
  }

}
