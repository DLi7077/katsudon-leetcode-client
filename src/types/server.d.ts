interface ProblemAttributes {
  _id: string;
  id: number;
  title: string;
  url: string;
  difficulty: string;
  description: string;
  tags: string[];
  solved_by: string[];
  created_at: Date;
}

interface SolutionAttributes {
  _id: string;
  user_id: string;
  problem_id: string;
  solution_language: string;
  solution_code: string;
  solution_length: number;
  failed?: boolean;
  error?: string;
  runtime_ms?: number;
  memory_usage_mb?: number;
  created_at: Date;
}

interface ProblemSolutions {
  problem: ProblemAttributes;
  solutions: SolutionAttributes[];
  lastSolved: Date;
}

interface SolutionFilterOptions {
  solution_language?: string;
  failed?: boolean;
  tags: string[]
}
