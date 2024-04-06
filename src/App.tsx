import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import useColorTheme from "./hooks/useColorTheme";
import "./index.css";
import _ from "lodash";
import { PAGE_DATA } from "./views";
import { cloneElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const defaultHue = 100;
  const [pageHue, setPageHue] = useState<number>(defaultHue);
  const [pageTheme, setPageTheme] = useColorTheme(defaultHue);

  useEffect(() => {
    const currentPath: ValidRoute = location.pathname as ValidRoute;
    setPageTheme(PAGE_DATA[currentPath]?.hue);
    setPageHue(PAGE_DATA[currentPath]?.hue);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [location.pathname]);

  const pageRoutes = _.map(PAGE_DATA, (data, path) => {
    const componentWithThemeProps = cloneElement(data.component, {
      theme: pageTheme,
    });
    return <Route key={path} path={path} element={componentWithThemeProps} />;
  });

  return (
    <div className="align-down-center" style={{ minHeight: "200vh" }}>
      <Navbar hue={pageHue} theme={pageTheme} />
      <Routes>{pageRoutes}</Routes>
    </div>
  );
}

export default App;
