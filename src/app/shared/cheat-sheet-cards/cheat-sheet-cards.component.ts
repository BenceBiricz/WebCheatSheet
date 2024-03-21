import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheat-sheet-cards',
  templateUrl: './cheat-sheet-cards.component.html',
  styleUrl: './cheat-sheet-cards.component.scss',
})
export class CheatSheetCardsComponent implements OnInit {
  @Input() title: string = 'Cheat Sheet';
  @Input() dataPath: string = '';
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('assets/data/' + this.dataPath + '.json')
      .subscribe((data: any) => {
        this.data = data!.columns;
      });
  }

  onClick(itemName: string) {
    console.log('clicked: ' + itemName);
  }
}
