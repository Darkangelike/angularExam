import { Component, Input, Output } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public stat1: Statistique = new Statistique('abcde', 'Women in web', '5.31%');

  public stat2: Statistique = new Statistique(
    'fghi',
    'French people who can speak English',
    '4%'
  );

  public stat3: Statistique = new Statistique('jklm', 'Am I hungry ?', '100%');

  public tabStats: Statistique[] = [];

  constructor() {
    this.tabStats.push(this.stat1, this.stat2);

    setTimeout(() => {
      this.tabStats.push(this.stat3);
      console.log(this.tabStats);
    }, 5000);
  }
}
