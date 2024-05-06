import { useEffect, useState } from "react";
import { getProblemTags } from "../../api/problem-api";
import { Chip } from "@mui/material";
import "./styles.css";

export default function ProblemTagContainer(props: {
  theme: ColorTheme;
  filter: ProblemTagOptions;
  handleTagClick: (clickedTag: string) => void;
}) {
  type ProblemTag = { tag: string; count: number };
  const [problemTags, setProblemTags] = useState<ProblemTag[]>([]);

  useEffect(() => {
    getProblemTags(props.filter).then((response) =>
      setProblemTags(response.data)
    );
  }, [props.filter]);

  const tagCountMap: Record<string, number> = problemTags.reduce(
    (mapping, { tag, count }) => {
      mapping[tag] = count;
      return mapping;
    },
    {} as Record<string, number>
  );

  const allProblemTags = problemTags.map((problemTags) => problemTags.tag);
  const selectedTags: string[] = props.filter.tags ?? [];
  const unselectedTags: string[] = allProblemTags.filter(
    (tag) => !selectedTags?.includes(tag)
  );

  return (
    <div className="tag-container">
      <div className="tag-container-caption">Problem Tags</div>
      <div className="tag-list">
        {selectedTags.map((tag) => (
          <Chip
            key={`${tag}: ${tagCountMap[tag]}`}
            label={`${tag}: ${tagCountMap[tag]}`}
            clickable
            style={{ backgroundColor: props.theme.navbar }}
            onClick={() => props.handleTagClick(tag)}
          />
        ))}
        {unselectedTags.map((tag) => (
          <Chip
            key={`${tag}: ${tagCountMap[tag]}`}
            label={`${tag}: ${tagCountMap[tag]}`}
            clickable
            onClick={() => props.handleTagClick(tag)}
          />
        ))}
      </div>
    </div>
  );
}
