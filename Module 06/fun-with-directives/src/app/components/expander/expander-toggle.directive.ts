import { Directive, HostBinding, HostListener, Input, OnInit, Optional, Renderer2 } from '@angular/core';
import { ExpanderComponent } from './expander.component';

@Directive({
  selector: 'button[expander-toggle]',
  exportAs: 'expanderToggle'
})
export class ExpanderToggleDirective implements OnInit {
  @Input()
  expandedLabel: string = '-';

  @Input()
  collapsedLabel: string = '+';

  public buttonLabel: string = this.collapsedLabel;

  @HostListener('click')
  onClick() {
    this.expander?.toggle();
    this.buttonLabel = this.expander?.isExpanded ? this.expandedLabel : this.collapsedLabel;
  }

  constructor(
    @Optional() private expander: ExpanderComponent | null, 
    private renderer: Renderer2) { 
  }

  ngOnInit(): void {
    console.log(this.collapsedLabel);
    console.log(this.expandedLabel);
    this.buttonLabel = this.expander?.isExpanded ? this.expandedLabel : this.collapsedLabel;

  }
}
