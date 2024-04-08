import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { TABLE_HEADERS } from "./constants";

export default function ProblemSolutionTableHeader(props: {
  sortBy: string;
  sortDir: Order;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
}) {
  const { sortBy, sortDir, onRequestSort } = props;
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {TABLE_HEADERS.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={sortBy === headCell.id ? sortDir : false}
            sx={{
              color: "white",
              backgroundColor: "#202020",
              ...(headCell.width &&  { width: `${headCell.width}px` }),
            }}
          >
            <TableSortLabel
              active={sortBy === headCell.id}
              direction={sortBy === headCell.id ? sortDir : "asc"}
              onClick={createSortHandler(headCell.id)}
              disabled={!headCell.sortable}
              sx={{
                "& .MuiTableSortLabel-icon": {
                  color: "white !important",
                },
              }}
            >
              {headCell.label}
              {sortBy === headCell.id && (
                <Box component="span" sx={visuallyHidden}>
                  {sortDir === "desc"
                    ? "sorted descending"
                    : "sorted ascending"}
                </Box>
              )}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
