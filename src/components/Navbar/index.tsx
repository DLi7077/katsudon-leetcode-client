import "./Navbar.css";
import { useScrollYPosition } from "react-use-scroll-position";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { highlightColor } from "../../hooks/useColorTheme";
import _ from "lodash";
import { PAGE_DATA } from "../../views";

const Effects = {
  tint: (hue: number) => ({
    filter: `hue-rotate(${hue}deg) saturate(.6)`,
  }),
};

export default function Navbar(props: {
  hue: number;
  theme: ColorTheme;
}): JSX.Element {
  const scrollY = useScrollYPosition();
  const location = useLocation();

  return (
    <nav
      style={
        scrollY > 40
          ? {
              backgroundColor: props.theme.navbar,
              height: "var(--navbar-height-condensed)",
            }
          : {}
      }
    >
      <div className="nav-wrapper">
        {scrollY <= 40 && (
          <div className="nav-background" style={Effects.tint(props.hue)} />
        )}
        <div className="navbar-content">
          <img
            src={logo}
            className="logo"
            style={{
              ...(scrollY > 40
                ? {
                    height: "var(--logo-size-condensed)",
                    width: "var(--logo-size-condensed)",
                  }
                : {}),
            }}
            alt="logo"
          />
          {_.chain(PAGE_DATA)
            .omit(["/"]) // exclude base url from navbar routes
            .map((data, path) => (
              <NavLink
                path={path as string}
                label={data.label}
                highlight={highlightColor(data.hue)}
                shouldHighlight={location.pathname === path}
              />
            ))
            .value()}
        </div>
      </div>
    </nav>
  );
}
