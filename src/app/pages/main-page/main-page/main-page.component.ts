import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/data/card-data.json').subscribe((data: any) => {
      this.data = data!.columns;
    });
  }

  onClick(itemName: string) {
    console.log('clicked: ' + itemName);
  }
}
