import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Main from "./pages/main/Main";
import About from "./pages/about/about";
import Notice from "./pages/notice/Notice";
import TimeLine from "./pages/timeLine/TimeLine";
import Booth from "./pages/booth/Booth";
import GuestBook from "./pages/guestBook/GuestBook";
import BoothDetail from "./pages/booth/boothDetail/BoothDetail";
import Promotion from "./pages/promotion/Promotion";
import NoticeDetail from "./pages/notice/detail/NoticeDetail";
import CountdownTimer from "./pages/CountdownTimer/CountdownTimer";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <CountdownTimer />
      },
      {
        path: "main",
        element: <Main />
      },
      {
        path: "notification",
        element: <Notice />
      },
      {
        path: "promotion",
        element: <Promotion />
      },
      {
        path: "notification/:id",
        element: <NoticeDetail />
      },
      {
        path: "promotion/:id",
        element: <NoticeDetail />
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
      },
      // {
      //   path: "countdown",
      //   element: <CountdownTimer />
      // }
    ],
    errorElement: <NotFound />
  },
]);

export default router;
