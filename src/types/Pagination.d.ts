export interface MetaDataPage {
  total: number;
  perPage: number;
  firstPage: number;
  lastPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Pagination<T> {
  data: T[];
  meta: MetaDataPage;
}
