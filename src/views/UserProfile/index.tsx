import { useState } from "react";
import ProblemSolutionTable from "../../components/ProblemSolutionTable";
import ProblemTagContainer from "../../components/ProblemTagContainer";

export default function UserProfile(props: { theme: ColorTheme }) {
  const [userId, setUserId] = useState("6306b34920cf5f80f7d0c20d");
  const [tags, setTags] = useState<string[]>([]);

  function handleTagClick(clickedTag: string) {
    if (tags.includes(clickedTag)) {
      const updatedTags = tags.filter((tag) => tag !== clickedTag);
      setTags(updatedTags);
    }
    const tagIsSelected = tags.includes(clickedTag);
    const updatedTags = tagIsSelected
      ? tags.filter((tag) => tag !== clickedTag)
      : [...tags, clickedTag];

    setTags(updatedTags);
  }

  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: props.theme.body }}
    >
      <ProblemTagContainer
        {...props}
        filter={{ userId, tags }}
        handleTagClick={handleTagClick}
      />
      <ProblemSolutionTable {...props} userId={userId} tags={tags} />
    </div>
  );
}
