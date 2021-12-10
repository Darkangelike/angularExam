import { Component, Input, Output } from '@angular/core';
import { StatService } from './services/stat.service';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tabStats: Statistique[] = [];

  constructor(public singletonStat: StatService) {
    this.tabStats = this.singletonStat.tabStats;
  }
}
