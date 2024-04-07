import { LANGUAGE_LOGOS } from "../../constants/language";

export default function SolutionIcon(props: { language: string }) {
  return (
    <img
      src={LANGUAGE_LOGOS[props.language]}
      alt={props.language}
      style={{ height: "24px" }}
    />
  );
}
