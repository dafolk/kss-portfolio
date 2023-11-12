import { createContext, useMemo, useState } from "react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/home";
import Layout from "./components/Layout";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#DECBB7" : "#433633",
      },
      secondary: {
        main: mode === "dark" ? "#433633" : "#DECBB7",
      },
      common: {
        black: "#433633",
        white: "#DECBB7",
      },
      info: {
        main: mode === "dark" ? "#433633" : "#DECBB7",

        contrastText: mode === "dark" ? "#433633" : "#DECBB7",
      },
      background: {
        default: mode === "dark" ? "#433633" : "#DECBB7",
      },
    },
    typography: {
      fontFamily: ['"Black Ops One"'].join(","),
    },
  });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout ColorModeContext={ColorModeContext}>
          <Home />
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
