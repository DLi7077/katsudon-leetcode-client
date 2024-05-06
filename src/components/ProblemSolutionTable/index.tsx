import {
  createTheme,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getSolutionsFromUser } from "../../api/solution-api";
import ProblemSolutionRow from "./ProblemSolutionRow";
import ProblemSolutionTableHeader from "./ProblemSolutionTableHeader";
import useSolutionModal from "../../hooks/useSolutionModal";

export default function ProblemSolutionTable(props: {
  theme: ColorTheme;
  userId: string;
  tags: string[];
}) {
  const [rows, setRows] = useState<ProblemSolutions[]>([]);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(25);
  const [sortDir, setSortDir] = useState<Order>("desc");
  const [sortBy, setSortBy] = useState<string>("lastSolved");
  const { handleOpenSolutionModel, SolutionModal } = useSolutionModal();

  const filters: SolutionFilterOptions = {
    // solution_language: "C++",
    tags: props.tags,
  };

  async function fetchSolutions(): Promise<void> {
    const paginationOptions: PaginationOptions = {
      page: page,
      limit: limit,
    };
    const sortOptions: SortQueryParams = { sortBy, sortDir };
    getSolutionsFromUser(
      props.userId,
      filters,
      sortOptions,
      paginationOptions
    ).then((paginatedData: Paginated<ProblemSolutions>) => {
      setRows(paginatedData.rows);
      setCount(paginatedData.count);
    });
  }

  useEffect(() => {
    fetchSolutions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.tags, count, page, limit, sortDir, sortBy]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = sortBy === property && sortDir === "asc";
    setSortDir(isAsc ? "desc" : "asc");
    setSortBy(property);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const theme = createTheme({
    components: {
      MuiTableSortLabel: {
        styleOverrides: {
          root: {
            color: "white !important",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            backgroundColor: props.theme.section,
            color: "white",
            padding: "8px",
            paddingLeft: "12px",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: `${props.theme.background} !important`,
          },
        },
      },
      MuiTablePagination: {
        styleOverrides: {
          root: {
            color: "white",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SolutionModal />
      <div style={{ width: "100%" }}>
        <TablePagination
          padding="none"
          rowsPerPageOptions={[10, 25, 50]}
          component={"div"}
          count={count}
          rowsPerPage={limit}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <TableContainer>
          <Table sx={{ color: "white", backgroundColor: "black" }}>
            <ProblemSolutionTableHeader
              sortBy={sortBy}
              sortDir={sortDir}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {rows.map((row) => (
                <ProblemSolutionRow
                  key={row.problem._id}
                  row={row}
                  handleOpenSolutionModel={handleOpenSolutionModel}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ThemeProvider>
  );
}
