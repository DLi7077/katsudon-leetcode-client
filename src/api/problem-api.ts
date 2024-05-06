import Api from "./api";

export async function getProblemTags(filters: ProblemTagOptions) {
  return Api.problemController.get("/tags", {
    params: filters,
  });
}
