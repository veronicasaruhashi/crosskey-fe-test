export interface TableColumnDefinition<T> {
  columnDef: string;
  header: string;
  align?: TableColumnAlignement;
  cell: (data: T) => string;
}

export type TableColumnAlignement = 'left' | 'right' | 'center';
