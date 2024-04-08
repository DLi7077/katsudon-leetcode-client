import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { PROBLEM_DIFFICULTY_COLOR } from "../../constants/difficulty";
import SolutionIcon from "./SolutionIcon";

export default function ProblemSolutionRow(props: {
  row: ProblemSolutions;
  handleOpenSolutionModel: (
    problem: ProblemAttributes,
    solutions: SolutionAttributes[]
  ) => void;
}) {
  const { problem, solutions, lastSolved } = props.row;

  const difficultyColor = PROBLEM_DIFFICULTY_COLOR[problem.difficulty];
  const logoDisplayLimit = 3;
  const containsPassedSolution = solutions.some((solution) => !solution.failed);
  return (
    <TableRow>
      <TableCell align="left" sx={{ color: difficultyColor }}>
        {problem.id}
      </TableCell>
      <TableCell align="left">
        <a
          href={problem.url}
          target="_blank"
          rel="noreferrer"
          className="hover-link"
          style={{ color: difficultyColor }}
        >
          {problem.title}
        </a>
      </TableCell>
      <TableCell align="left">
        <div className="align-horizontal-center" style={{ gap: "2px" }}>
          <IconButton
            sx={{ padding: 0, marginRight: "8px" }}
            onClick={() => {
              props.handleOpenSolutionModel(
                props.row.problem,
                props.row.solutions
              );
            }}
          >
            <TextSnippetIcon
              style={{
                fontSize: "1.5rem",
                color: containsPassedSolution ? "white" : "#bd2b1e",
              }}
            />
          </IconButton>
          {solutions.slice(0, logoDisplayLimit).map((solution) => (
            <SolutionIcon
              key={solution.solution_language}
              language={solution.solution_language}
            />
          ))}
          {solutions.length > logoDisplayLimit && (
            <span>+{solutions.length - logoDisplayLimit}</span>
          )}
        </div>
      </TableCell>
      <TableCell sx={{ width: "fit-content" }}>
        {new Date(lastSolved).toLocaleString().split(", ")[0]}
      </TableCell>
    </TableRow>
  );
}
