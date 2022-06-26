import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['red', 'green', 'blue', 'brown', 'purple', 'black', 'teal'];
  sizes = ['12px', '16px', '24px', '32px', '40px', '70px'];
  fonts = ['David', 'Tahoma', 'Arial', 'Verdana', 'Times new roman', 'Segoe UI', 'Consolas'];

  selectedColor = this.colors[0];
  selectedFont = this.fonts[0];
  selectedSize = this.sizes[0];


  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

}
