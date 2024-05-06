import Api from "./api";

export async function getSolutionsFromUser(
  userId: string,
  filters?: SolutionFilterOptions,
  sortOptions?: SortQueryParams,
  paginationOptions?: PaginationOptions
): Promise<Paginated<ProblemSolutions>> {
  return Api.solutionController
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
