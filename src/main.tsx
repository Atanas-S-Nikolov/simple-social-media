import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./lib/router/AppRouter";
import { GlobalStyle } from "./styles/global.styled";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
);
