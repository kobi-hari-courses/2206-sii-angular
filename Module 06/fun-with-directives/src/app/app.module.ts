import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TitleTooltipDirective } from './directives/title-tooltip.directive';
import { UnderlineDirective } from './directives/underline.directive';
import { ExpanderComponent } from './components/expander/expander.component';
import { BlankComponent } from './components/blank/blank.component';
import { ExpanderToggleDirective } from './components/expander/expander-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleTooltipDirective,
    UnderlineDirective,
    ExpanderComponent,
    BlankComponent,
    ExpanderToggleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
