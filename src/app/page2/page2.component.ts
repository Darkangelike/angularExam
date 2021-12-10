import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Statistique } from '../models/statistique';
import { StatService } from '../services/stat.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  public newStat!: Statistique;
  public id!: string;
  public title!: string;
  public value!: string;
  public tabStats: Statistique[] = [];

  constructor(public router: Router, public singletonStat: StatService) {
    this.tabStats = this.singletonStat.tabStats;
  }

  ngOnInit(): void {}

  checkForm() {
    this.newStat = new Statistique(this.id, this.title, this.value);
    this.tabStats.push(this.newStat);
    this.router.navigate(['/page1']);
  }
}
