type SolutionSortables =
  | "runtime_ms"
  | "memory_usage_mb"
  | "solution_length"
  | "created_at";

type ProblemSortables = "id" | "title";

type Sortable = SolutionSortables | ProblemSortables;
