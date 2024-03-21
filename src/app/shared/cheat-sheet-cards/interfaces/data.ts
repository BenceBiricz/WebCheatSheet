export interface Data {
  columns: Column[];
}

export interface Column {
  columnItem: ColumnItem[];
}

export interface ColumnItem {
  title: string;
  items: string[];
}
