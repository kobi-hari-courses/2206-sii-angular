import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fun-with-directives';
  favoriteColor = 'teal';

  onHighlightVanished(color: string) {
    console.log('highlight of color ' + color + ' has vanished');
  }
}
