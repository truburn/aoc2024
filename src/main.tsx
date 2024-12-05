import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { dark } from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";

createRoot(document.getElementById("app-root")!).render(
  <StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
