import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { light } from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import { RouterProvider } from "react-router";
import routes from "@pages/routes.tsx";

createRoot(document.getElementById("app-root")!).render(
  <StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>
);
