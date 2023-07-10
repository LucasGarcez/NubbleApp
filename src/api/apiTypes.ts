export interface MetaDataPageApi {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string; // '/?page=1';
  last_page_url: string; // '/?page=5';
  next_page_url: string; //'/?page=2';
  previous_page_url: string; // null;
}

export interface PaginationApi<T> {
  data: T[];
  meta: MetaDataPageApi;
}

export interface PaginationParamsApi {
  page: number;
  per_page: number;
}
