import { TableCell, TableRow } from "@mui/material";
import { PROBLEM_DIFFICULTY_COLOR } from "../../constants/difficulty";
import SolutionIcon from "./SolutionIcon";

export default function ProblemSolutionRow(props: { row: ProblemSolutions }) {
  const { problem, solutions, lastSolved } = props.row;

  const difficultyColor = PROBLEM_DIFFICULTY_COLOR[problem.difficulty];
  const logoDisplayLimit = 3;
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
          {solutions.slice(0, logoDisplayLimit).map((solution) => (
            <SolutionIcon language={solution.solution_language} />
          ))}
          {solutions.length > logoDisplayLimit && (
            <span>+{solutions.length - logoDisplayLimit}</span>
          )}
        </div>
      </TableCell>
      <TableCell>
        {new Date(lastSolved).toLocaleString().split(", ")[0]}
      </TableCell>
    </TableRow>
  );
}
