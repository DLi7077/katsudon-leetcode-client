import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import { PAGE_DATA } from "./views";
import _ from "lodash";
import PageContainer from "./components/PageContainer";
import { generateTheme } from "./hooks/useColorTheme";

function App() {
  const pageRoutes = _.map(PAGE_DATA, (data, path) => {
    const theme = generateTheme(data.hue);
    return (
      <Route
        key={path}
        path={path}
        element={<PageContainer theme={theme}>{data.component}</PageContainer>}
      />
    );
  });

  return (
    <div className="align-down-center">
      <Navbar />
      <Routes>{pageRoutes}</Routes>
    </div>
  );
}

export default App;
