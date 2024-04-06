import { generateTheme } from "../hooks/useColorTheme";
import UserProfile from "./UserProfile";
import Users from "./Users";
import WeeklyProgress from "./WeeklyProgress";

export const PAGE_DATA: Record<ValidRoute, PageData> = {
  "/": {
    label: "Profile",
    hue: 335,
    component: <UserProfile theme={generateTheme(335)} />,
  },
  "/users": {
    label: "Users",
    hue: 170,
    component: <Users theme={generateTheme(170)}/>,
  },
  "/weekly-progress": {
    label: "Progress",
    hue: 25,
    component: <WeeklyProgress theme={generateTheme(25)}/>,
  },
  "/profile": {
    label: "Profile",
    hue: 335,
    component: <UserProfile theme={generateTheme(335)}/>,
  },
};
