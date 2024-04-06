import { ReactNode } from "react";

// adds a background color
export default function PageContainer(props: {
  theme: ColorTheme;
  children?: ReactNode;
}) {
  return (
    <div
      className="align-down-center"
      style={{ backgroundColor: props.theme.background, width: "100%" }}
    >
      {props.children}
    </div>
  );
}
