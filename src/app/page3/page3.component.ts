import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Statistique } from '../models/statistique';
import { StatService } from '../services/stat.service';

type NicoStat = {
  value: string;
  icon: string;
  updatedAt: number;
  id: string;
  title: string;
};

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
})
export class Page3Component implements OnInit {
  public requestSuccess: boolean = false;
  private api_URL: string = 'https://stats.naminilamy.fr';
  public nicoStats: NicoStat[] = [];
  configUrl = 'assets/config.json';

  constructor(public http: HttpClient) {}

  ngOnInit(): void {}

  sendRequest() {
    this.http
      .get(this.api_URL)
      .toPromise()
      .then((res) => {
        this.nicoStats = res as NicoStat[];
        this.requestSuccess = true;
      });
  }

  // postRequest(newStat) {
  //   this.http.post<NicoStat>(this.api_URL, );
  // }
}
