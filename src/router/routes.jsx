import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";
import Movies from "../pages/Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
