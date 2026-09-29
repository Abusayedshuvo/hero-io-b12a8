import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home/Home";
import Apps from "../components/Apps/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
    ],
  },
]);
