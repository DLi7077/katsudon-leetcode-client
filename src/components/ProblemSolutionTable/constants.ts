export type SortableHeaderCell = {
  id: Sortable;
  label: string;
};
export type HeaderCell = {
  id: string;
  label: string;
  sortable: boolean;
};

export const TABLE_HEADERS: HeaderCell[] = [
  {
    id: "id",
    label: "#",
    sortable: true,
  },
  {
    id: "title",
    label: "Title",
    sortable: true,
  },
  {
    id: "solution",
    label: "Solution",
    sortable: false,
  },
  {
    id: "lastSolved",
    label: "Last Solved",
    sortable: true,
  },
];
