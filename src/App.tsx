import _ from "lodash";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import { generateTheme } from "./hooks/useColorTheme";
import "./index.css";
import { PAGE_DATA } from "./views";
import { createTheme, ThemeProvider } from "@mui/material";

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

  const theme = createTheme({
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            color: "white",
            backgroundColor: "#464646",
            height: "1.25rem",
          },
        },
      },
    },
  });
  return (
    <div className="align-down-center">
      <HashRouter>
        <Navbar />
        <ThemeProvider theme={theme}>
          <Routes>{pageRoutes}</Routes>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
