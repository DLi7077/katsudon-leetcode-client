type Order = "asc" | "desc";

interface SortQueryParams {
  sortBy?: string;
  sortDir?: Order;
}

interface PaginationOptions {
  page: number;
  limit: number;
}

interface Paginated<T> {
  count: number;
  rows: T[];
}
