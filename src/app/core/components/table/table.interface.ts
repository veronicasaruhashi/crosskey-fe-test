export interface TableColumnDefinition<T> {
  columnDef: string;
  header: string;
  cssClass?: string;
  cell: (data: T) => string;
}
