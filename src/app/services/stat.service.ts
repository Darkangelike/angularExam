import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  public tabStats: Statistique[] = [];

  constructor() {
    this.tabStats = [
      new Statistique('abcde', 'Women in web', '5.31%'),
      new Statistique('fghi', 'French people who can speak English', '4%'),
    ];
  }
}
