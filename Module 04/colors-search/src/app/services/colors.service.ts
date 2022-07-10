import { Injectable } from '@angular/core';
import { Color } from '../models/color.model';
import { ALLCOLORS } from './../models/all-colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  private allColors!: Color[];

  constructor() {
    this.allColors = Object
      .entries(ALLCOLORS)
      .map(([code, displayName]) => ({ displayName, code }));
  }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async search(keyword: string): Promise<Color[]> {
    if (!keyword) return [];
    keyword = keyword.toLowerCase();

    console.log(`Starting search for ${keyword}`);
    await this.delay(3000);

    const res = this.allColors.filter(clr => clr
      .displayName
      .toLowerCase()
      .includes(keyword));

    console.log(`Completed search for ${keyword}`);
    return res;
  }
}
