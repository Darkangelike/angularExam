import { Component, OnInit } from '@angular/core';
import { StatService } from '../services/stat.service';
import { Statistique } from 'src/app/models/statistique';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  public tabStats: Statistique[] = [];

  constructor(public singletonStat: StatService) {
    this.tabStats = this.singletonStat.tabStats;
  }

  clickEvent(stat: Statistique) {
    let index = this.tabStats.indexOf(stat);
    if (index != -1) {
      this.tabStats.splice(index, 1);
    }
  }
  ngOnInit(): void {}
}
