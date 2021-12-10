import { Component, Input } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() stat2: Statistique = new Statistique(
    'fghi',
    'French people who can speak English',
    '4%'
  );

  @Input()
  stat1: Statistique = new Statistique('abcde', 'Women in web', '5.31%');
}
