import "./Navbar.css";
import { useScrollYPosition } from "react-use-scroll-position";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import useColorTheme, { highlightColor } from "../../hooks/useColorTheme";
import _ from "lodash";
import { PAGE_DATA } from "../../views";
import { useEffect, useState } from "react";

const Effects = {
  tint: (hue: number) => ({
    filter: `hue-rotate(${hue}deg) saturate(.20)`,
  }),
};

export default function Navbar(): JSX.Element {
  const scrollY = useScrollYPosition();
  const location = useLocation();
  const defaultHue = 100;
  const [hue, setHue] = useState<number>(defaultHue);
  const [theme, setTheme] = useColorTheme(defaultHue);

  useEffect(() => {
    const currentPath: ValidRoute = location.pathname as ValidRoute;
    setTheme(PAGE_DATA[currentPath]?.hue);
    setHue(PAGE_DATA[currentPath]?.hue);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [location.pathname]);


  return (
    <nav
      style={
        scrollY > 40
          ? {
              backgroundColor: theme.navbar,
              height: "var(--navbar-height-condensed)",
            }
          : {}
      }
    >
      <div className="nav-wrapper">
        {scrollY <= 40 && (
          <div className="nav-background" style={Effects.tint(hue)} />
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
            .map((data: PageData, path: string) => (
              <NavLink
                path={path}
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
