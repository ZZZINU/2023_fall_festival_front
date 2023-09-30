import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Notice from "./pages/notice/Notice";
import TimeLine from "./pages/timeLine/TimeLine";
import Booth from "./pages/booth/Booth";
import GuestBook from "./pages/guestBook/GuestBook";
import BoothDetail from "./pages/booth/boothDetail/BoothDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "notice",
        element: <Notice />
      },
      {
        path: "timeLine",
        element: <TimeLine />
      },
      {
        path: "booths",
        element: <Booth />
      },
      {
        path: "booths/:id",
        element: <BoothDetail />
      },
      {
        path: "guestBook",
        element: <GuestBook />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]);

export default router;
