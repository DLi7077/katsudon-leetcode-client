import { Tab, Tabs } from "@mui/material";
import { ReactNode, useState } from "react";

/**
 * @description
 * @param {*} tabs contains a list of objects with the following:
 * @param {string} label - The tab label
 * @param {ReactNode} content - The content to render
 * @returns A tab group with the provided contents
 */
export default function TabGroup(props: {
  tabs: { label: string; content: ReactNode }[];
  color: string;
}) {
  const [tab, setTab] = useState(0);

  return (
    <>
      <Tabs
        variant="scrollable"
        value={tab}
        onChange={(event, newTab) => {
          setTab(newTab);
        }}
        TabIndicatorProps={{
          style: { backgroundColor: props.color ?? "white" },
        }}
      >
        {props.tabs.map((content, idx) => {
          return (
            <Tab
              key={idx}
              label={
                <div style={{ fontSize: "18px", textTransform: "none" }}>
                  {content.label}
                </div>
              }
              style={{
                color: props.color ?? "white",
                paddingTop: 0,
                paddingBottom: 0,
                marginLeft: 0,
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            />
          );
        })}
      </Tabs>
      <div>{props.tabs[tab].content}</div>
    </>
  );
}
