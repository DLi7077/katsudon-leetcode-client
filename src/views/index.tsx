import UserProfile from "./UserProfile";
import Users from "./Users";
import WeeklyProgress from "./WeeklyProgress";

export const PAGE_DATA: Record<ValidRoute, PageData> = {
  "/": {
    label: "Profile",
    hue: 335,
    component: <UserProfile />,
  },
  "/users": {
    label: "Users",
    hue: 170,
    component: <Users />,
  },
  "/weekly-progress": {
    label: "Progress",
    hue: 25,
    component: <WeeklyProgress />,
  },
  "/profile": {
    label: "Profile",
    hue: 335,
    component: <UserProfile />,
  },
};
