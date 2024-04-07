import axios from "axios";

const serverUrl = "https://katsudon-lc-server-stg-eed081005ad0.herokuapp.com/api/solution";
const solutionController = axios.create({
  baseURL: serverUrl,
});

export async function getSolutionsFromUser(
  userId: string,
  filters?: SolutionFilterOptions,
  sortOptions?: SortQueryParams,
  paginationOptions?: PaginationOptions
): Promise<Paginated<ProblemSolutions>> {
  console.log(userId, filters, sortOptions, paginationOptions);
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
