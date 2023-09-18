import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import App from "./App";

import Main from "./pages/mainpage/mainpage";
import About from "./pages/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
