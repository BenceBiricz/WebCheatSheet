import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Column, Data } from './interfaces/data';

@Component({
  selector: 'app-cheat-sheet-cards',
  templateUrl: './cheat-sheet-cards.component.html',
  styleUrl: './cheat-sheet-cards.component.scss',
})
export class CheatSheetCardsComponent implements OnInit {
  @Input() title: string = 'Cheat Sheet';
  @Input() dataPath: string = '';
  data: any;
  itemName: string = '';
  isChoosen = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('assets/data/' + this.dataPath + '.json')
      .subscribe((data: any) => {
        this.data = data!.columns;
      });
  }

  onClick(itemName: string) {
    this.sortBySearchTerm(this.data, 'Text and ');

    this.itemName = itemName;
    this.isChoosen = !this.isChoosen;
    console.log(this.isChoosen);
  }

  // Function to sort the array based on a search term
  sortBySearchTerm(columnArray: Column[], searchTerm: string): any {
    const sortedColumns = columnArray.map((column: any) => {
      const sortedColumnItem = column.columnItem.sort((a: any, b: any) => {
        const searchTermIndexA = a.title
          .toLowerCase()
          .indexOf(searchTerm.toLowerCase());
        const searchTermIndexB = b.title
          .toLowerCase()
          .indexOf(searchTerm.toLowerCase());

        if (searchTermIndexA !== -1 && searchTermIndexB === -1) return -1; // a comes before b if a matches and b doesn't
        if (searchTermIndexA === -1 && searchTermIndexB !== -1) return 1; // b comes before a if b matches and a doesn't
        return 0;
      });

      return { columnItem: sortedColumnItem };
    });
    console.log(sortedColumns);
    return { columns: sortedColumns };
  }
}
