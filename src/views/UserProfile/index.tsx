import { useState } from "react";
import ProblemSolutionTable from "../../components/ProblemSolutionTable";

export default function UserProfile(props: { theme: ColorTheme }) {
  const [userId, setUserId] = useState("6306b34920cf5f80f7d0c20d");
  const [tags, setTags] = useState<string[]>(["Graph"]);

  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: props.theme.body }}
    >
      <ProblemSolutionTable {...props} userId={userId} tags={tags} />
    </div>
  );
}
