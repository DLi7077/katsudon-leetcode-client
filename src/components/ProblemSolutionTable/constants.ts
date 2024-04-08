export type SortableHeaderCell = {
  id: Sortable;
  label: string;
};
export type HeaderCell = {
  id: string;
  label: string;
  sortable: boolean;
  width?: number;
};

export const TABLE_HEADERS: HeaderCell[] = [
  {
    id: "id",
    label: "#",
    sortable: true,
    width: 30,
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
    width: 100,
  },
  {
    id: "lastSolved",
    label: "Submitted",
    width: 90,
    sortable: true,
  },
];
