import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-page',
  templateUrl: './css-page.component.html',
  styleUrl: './css-page.component.scss',
})
export class CssPageComponent implements OnInit {
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
