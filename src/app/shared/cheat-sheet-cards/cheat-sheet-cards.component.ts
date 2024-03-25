import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  Column,
  Item,
  ColumnItem,
  SortedColumn,
  SortedColumnItem,
} from './interfaces/data';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/models/app-state';
import { Observable } from 'rxjs';
import { toggleOverlay } from '../../store/actions/overlay-open-action';

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
  codeSnippet: string = '';
  description: string = '';

  myBoolean$: Observable<boolean>;
  overlayOpenState: boolean = false;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.myBoolean$ = this.store.select((state) => state.myBoolean);
  }

  ngOnInit() {
    this.http
      .get('assets/data/' + this.dataPath + '.json')
      .subscribe((data: any) => {
        this.data = data!.columns;
      });
  }

  onClick(itemName: string) {
    this.store.dispatch(toggleOverlay());

    this.itemName = itemName;

    var columnsArray = this.data;

    for (let i = 0; i < columnsArray.length; i++) {
      for (let j = 0; j < columnsArray[i].columnItem.length; j++) {
        for (let k = 0; k < columnsArray[i].columnItem[j].items.length; k++) {
          if (columnsArray[i].columnItem[j].items[k].name === itemName) {
            this.codeSnippet =
              columnsArray[i].columnItem[j].items[k].codeSnippet;
            this.description =
              columnsArray[i].columnItem[j].items[k].description;
          }
        }
      }
    }
  }

  searchText(val: any) {
    console.log(val);
    this.sortBySearchTerm(this.data, val);
  }

  sortBySearchTerm(columns: Column[], searchTerm: string): Column[] {
    // Sorting items based on search term
    columns.forEach((column: Column) => {
      column.columnItem.forEach((columnItem: ColumnItem) => {
        columnItem.items.sort((a: Item, b: Item) => {
          const searchTermIndexA = a.name
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase());
          const searchTermIndexB = b.name
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase());

          if (searchTermIndexA !== -1 && searchTermIndexB === -1) return -1; // a comes before b if a matches and b doesn't
          if (searchTermIndexA === -1 && searchTermIndexB !== -1) return 1; // b comes before a if b matches and a doesn't
          return 0;
        });
      });
    });

    // Sorting columnItem based on whether any item contains the search term
    columns.forEach((column: Column) => {
      column.columnItem.sort((a: ColumnItem, b: ColumnItem) => {
        const aContainsTerm = a.items.some((item: Item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const bContainsTerm = b.items.some((item: Item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (aContainsTerm && !bContainsTerm) return -1; // a comes before b if a contains the term and b doesn't
        if (!aContainsTerm && bContainsTerm) return 1; // b comes before a if b contains the term and a doesn't
        return 0;
      });
    });

    // Sorting columns based on whether any columnItem contains the search term
    columns.sort((a: Column, b: Column) => {
      const aContainsTerm = a.columnItem.some((columnItem: ColumnItem) => {
        return columnItem.items.some((item: Item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      const bContainsTerm = b.columnItem.some((columnItem: ColumnItem) => {
        return columnItem.items.some((item: Item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      if (aContainsTerm && !bContainsTerm) return -1; // a comes before b if a contains the term and b doesn't
      if (!aContainsTerm && bContainsTerm) return 1; // b comes before a if b contains the term and a doesn't
      return 0;
    });

    return columns;
  }
}
