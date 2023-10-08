import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
// import ReactGA from "react-ga4";
// import RouteChangeTracker from "../RouteChangeTracker";

// 구글 애널리틱스 운영서버만 적용
// if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
//   ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <RouteChangeTracker /> */}
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
