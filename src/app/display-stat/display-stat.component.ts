import { Component, OnInit, Input } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-display-stat',
  templateUrl: './display-stat.component.html',
  styleUrls: ['./display-stat.component.css'],
})
export class DisplayStatComponent implements OnInit {
  @Input() aStat!: Statistique;

  constructor() {}

  ngOnInit(): void {}
}
