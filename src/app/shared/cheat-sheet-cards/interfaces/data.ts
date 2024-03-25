export interface Item {
  name: string;
  codeSnippet: string;
  description: string;
}

export interface ColumnItem {
  title: string;
  items: Item[];
}

export interface Column {
  columnItem: ColumnItem[];
}

export interface SortedColumnItem extends ColumnItem {
  containsSearchTerm: boolean;
}

export interface SortedColumn extends Column {
  containsSearchTerm: boolean;
}
