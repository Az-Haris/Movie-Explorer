import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./router/routes.jsx";
import "./index.css";
import MoviesProvider from "./providers/movies.provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoviesProvider>
      <RouterProvider router={router} />
    </MoviesProvider>
  </StrictMode>,
);
