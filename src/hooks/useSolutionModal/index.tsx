import { Chip, createTheme, Modal, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { PROBLEM_DIFFICULTY_COLOR } from "../../constants/difficulty";
import { LANGUAGE_COMPILE_MAPPING } from "../../constants/language";
import CodeBlock from "./CodeBlock";
import "./styles.css";
import TabGroup from "./TabGroup";

// hook that returns a function to open the modal, and the modal component
export default function useSolutionModal() {
  type LanguageToSolutionMap = Record<string, SolutionAttributes>;

  const [modalOpen, setModalOpen] = useState(false);
  const [problem, setProblem] = useState<ProblemAttributes | null>(null);
  const [solutions, setSolutions] = useState<LanguageToSolutionMap>({});

  const solutionLanguages = Object.keys(solutions);
  const solutionTabs = solutionLanguages.map((language) => {
    const solutionDetails = solutions[language];
    const runtime = solutionDetails.runtime_ms;
    const memory = solutionDetails.memory_usage_mb;

    const hasRuntime = runtime !== null;
    const hasMemoryUsage = memory !== null;

    return {
      label: language,
      content: (
        <div className="solution-code">
          <div style={{ padding: "1rem" }}>
            {hasRuntime && hasMemoryUsage && (
              <>
                Runtime: {runtime} ms <br />
                Memory Usage: {memory} MB
              </>
            )}
            {hasRuntime && !hasMemoryUsage && (
              <>
                Runtime: {runtime} ms <br />
                Memory Usage: {0}B
              </>
            )}
            {!hasRuntime && !hasMemoryUsage && (
              <div style={{ color: "#FF4500" }}>
                {solutionDetails.error ?? "Wrong Answer"}
              </div>
            )}
          </div>
          <CodeBlock
            code={solutions![language].solution_code}
            language={LANGUAGE_COMPILE_MAPPING[language]}
          />
        </div>
      ),
    };
  });

  function handleOpenSolutionModel(
    problem: ProblemAttributes,
    solutions: SolutionAttributes[]
  ) {
    const languageSolutionMapping: LanguageToSolutionMap = solutions.reduce(
      (mapping, solution) => {
        mapping[solution.solution_language] = solution;
        return mapping;
      },
      {} as LanguageToSolutionMap
    );
    setProblem(problem);
    setSolutions(languageSolutionMapping);
    setModalOpen(true);
  }

  function handleCloseSolutionModel() {
    setProblem(null);
    setSolutions({});
    setModalOpen(false);
  }

  function SolutionModal(): JSX.Element {
    const theme = createTheme({
      components: {
        MuiChip: {
          styleOverrides: {
            root: {
              color: "white",
              backgroundColor: "#464646",
              height: "1.5rem",
            },
          },
        },
      },
    });
    return (
      <ThemeProvider theme={theme}>
        <Modal
          open={modalOpen}
          onClose={handleCloseSolutionModel}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {problem ? (
            <div className="solution-container">
              <div className="problem-block">
                <div className="modal-content">
                  <a
                    href={problem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="leetcode-title"
                    style={{
                      color: PROBLEM_DIFFICULTY_COLOR[problem.difficulty],
                    }}
                  >
                    {problem.id}. {problem.title}
                  </a>
                  <div
                    className="align-horizontal-center"
                    style={{ marginTop: "8px", gap: "8px", overflowX: "auto" }}
                  >
                    {problem.tags.map((tag) => (
                      <Chip label={tag} variant="outlined" key={tag} />
                    ))}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: problem.description }}
                  />
                </div>
              </div>
              <div className="solution-block">
                <div className="modal-content">
                  <TabGroup
                    tabs={solutionTabs}
                    color={PROBLEM_DIFFICULTY_COLOR[problem.difficulty]}
                  />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </Modal>
      </ThemeProvider>
    );
  }

  return {
    handleOpenSolutionModel,
    SolutionModal,
  };
}
