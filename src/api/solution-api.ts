import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_BASE + "/api/solution";
const solutionController = axios.create({
  baseURL: serverUrl,
});

export async function getSolutionsFromUser(
  userId: string,
  filters?: SolutionFilterOptions,
  sortOptions?: SortQueryParams,
  paginationOptions?: PaginationOptions
): Promise<Paginated<ProblemSolutions>> {
  return solutionController
    .get("/all", {
      params: {
        userId,
        ...filters,
        ...sortOptions,
        ...paginationOptions,
      },
    })
    .then((response) => response.data);
}
