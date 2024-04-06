import { Link } from "react-router-dom";

export default function NavLink(props: {
  highlight: hsl;
  path: string;
  label: string;
  shouldHighlight: boolean;
}) {
  return (
    <li style={{ position: "relative" }}>
      <Link to={props.path} className="hash-route">
        {props.label}
      </Link>
      {props.shouldHighlight && (
        <div
          style={{
            position: "absolute",
            bottom: "-6px",
            width: "100%",
            height: "3px",
            backgroundColor: props.highlight,
            borderRadius: "4px",
          }}
        />
      )}
    </li>
  );
}
